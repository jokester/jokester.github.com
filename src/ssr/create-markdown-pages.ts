import * as fsp from './fsp';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { sortBy, isEqual } from 'lodash-es';
import { isDevBuild } from '../config/build-env';

export async function recursiveDir(
  start: string,
  shouldContinue: (path: string) => boolean = () => true,
): Promise<string[]> {
  const toSearch = [start];
  const ret: string[] = [];
  while (toSearch.length) {
    const dir = toSearch.shift()!;
    for (const entry of await fsp.readDir(dir)) {
      const realpath = path.join(dir, entry);

      const stat = await fsp.lstat(realpath);
      if (stat.isFile()) {
        ret.push(realpath);
      } else if (stat.isDirectory() && shouldContinue(realpath)) {
        toSearch.push(realpath);
      }
    }
  }

  return ret;
}

export async function readMarkdownContent(slug: string[]): Promise<string> {
  const x = await getMarkdownList();
  const f = x.files.find((_) => isEqual(_.slug, slug))!;
  const parsed = matter(await fsp.readText(f.realpath));

  return parsed.content;
}

interface MarkdownFrontMatter {
  title: string;
  publishAt: string;
}

export interface MarkdownMeta {
  realpath: string;
  basename: string;
  slug: string[];
  frontMatter: MarkdownFrontMatter;
}

function launderFrontMatter(data: { title?: string; publishAt?: Date }): null | MarkdownFrontMatter {
  if (data.title && data.publishAt) {
    return { title: data.title, publishAt: format(data.publishAt, 'yyyy-MM-dd') };
  }
  return null;
}

export async function getMarkdownList(): Promise<{
  postsDir: string;
  files: MarkdownMeta[];
}> {
  const start = path.join(process.env.REPO_ROOT!, 'posts');
  const realpaths = await recursiveDir(start);
  const files: MarkdownMeta[] = [];

  for (const realpath of realpaths) {
    const basename = path.basename(realpath);

    let _, authorDate, slugFromBasename;
    if (
      ([_, authorDate = null, slugFromBasename = null] = /^(\d+-\d+-\d+)-(.*)\.(md|markdown)$/i.exec(basename) ?? []) &&
      authorDate &&
      slugFromBasename
    ) {
      const mdFile = matter(await fsp.readText(realpath));
      const frontMatter = launderFrontMatter(mdFile.data as any);

      if (isDevBuild || frontMatter) {
        files.push({
          realpath,
          basename,
          slug: [frontMatter?.publishAt ?? '7777-77-77', slugFromBasename], //realpath.slice(start.length + 1).split('/'),
          frontMatter: frontMatter ?? {
            title: 'UNTITLED',
            publishAt: '7777-77-77',
          },
        });
      }
    }
  }
  return {
    postsDir: start,
    files: sortBy(files, (_) => _.frontMatter.publishAt).reverse(),
  };
}
