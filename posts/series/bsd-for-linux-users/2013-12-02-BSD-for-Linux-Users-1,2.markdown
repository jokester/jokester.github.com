---
title: BSD for Linux Users 简译 1,2 / 11
publishAt: 2013-12-02
---
原作者 [Matt](http://www.over-yonder.net/~fullermd/)

原链接 [BSD for Linux Users](http://www.over-yonder.net/~fullermd/rants/bsd4linux/01)

-----------

> BSD和Linux的不同源自他们不同的哲学。只要理解这点，其他的一切都顺理成章。

* toc
{:toc}

#### 1. 前言

##### 这是什么？

我用 FreeBSD。我很多朋友用 Linux，或者至少一种 Linux 发行版。可以说我们都认为 Unix 式的 OS 是正确的选择，但在用哪个上有分歧.

在我印象中，BSD 社区对 Linux 的了解要比 Linux 社区对 BSD 的了解深得多。我对此现象有一套解释，但是和本文无关。
我认为一些 Linux 用户不喜欢 BSD 是因为不了解 BSD。因此作为 BSD 用户，我想介绍一下 BSD 是怎样做事的，供 Linux 用户参考。

这两派 OS 极其相似，也有很多不同。
当深入研究这些不同时，你会发现不同发源于理念: 开发方法论 / 部署和使用 / 认为什么重要 / 认为什么味儿冰淇淋好吃。

比较表面的不同没意义，是理念的不同导致了行事方法不同。

##### 这不是什么?

- 命令对照表
- 怎样装 BSD
- 为什么你应该抛弃 BSD 用 Linux
- 为什么你应该抛弃 Linux 用 BSD
- 为什么你应该抛弃这个 BSD 用那个 BSD
- 为什么你应该抛弃这个 Linux 发行版用那个发行版
- 为什么 BSD 对 Linux 错
- 为什么 Linux 对 BSD 错
- 为什么我是神 汝当拜我

我认为自己的 OS 选择正确。我不要求你相信.
认识事实，以及研究事实背后的起源，能让你好好用脑。这就是你长脑的原因。

##### 初步的想法

Linux 和 BSD 有大量复杂的区别。这些区别有很多种表述，我特别喜欢这个:

> BSD是一群Unix黑客试图移植Unix到PC的产物。Linux是PC黑客试图在PC上造Unix的产物。

我喜欢这段不是因为他极其符合事实，而是因为能说明那种感觉。
和 Linux 相比，BSD 更像传统 Unix（们）。因为 BSD 是 Berkley BSD 的直系后代，Berkley BSD 又是 AT&T Unix 的直系后代。
Unix 商标属于 The Open Group，Unix 代码属于 SCO，所以不能说 BSD 是真正的 Unix（这样的说法曾导致 USL/UCB 打上法庭)。
但是从很多方面看，BSD 是传统 Unix 的直接衍生物。

这些区别表现在很多方面：基本系统的设计，包管理，硬盘分区，命令的细节。
这些区别表现在开发者的态度，反射和偏见，又被代码和用户反映。

“BSD 是设计出来的. Linux 是生长出来的” 可能是唯一简洁又正确的表述.

(目录，略)

-----------

#### 2. 选手们

##### Unix

严格地说 Unix 不是 OS. Unix 是又不是 OS.

(历史, 略)

当我们说 Unix, 我们一般不是指 Unix 的商标 而是"有实质上像 Unix 的设计/执行/界面/口味的任何 OS".
包括 BSD, Linux, SunOS, Tru64, SCO, Irix, AIX, HP/UX 等.

我不关心多少天使可以在分叉的头发上跳舞. 你知道我说的 Unix 是什么.

##### Linux

Linux 也有很多含义。它是 Linus 在芬兰求学时写出的 kernel，后来又过了无数人的手。
Linux 可也指一系 OS。

在这一秒钟，世界上也进行着各种“Linux 只是 kernel，不是 OS”，“Linux 应该叫 GNU/Linux”之类争论。
为了避免文字之争, 我说 Linux 时就是指 Red Hat / Slackware / Mandrake / Debian / SuSe / Gentoo / 其他无数发行版
这些建筑在 Linux kernel 的系统。

##### BSD

BSD 起初是一些在 UCB 开发的，Bell Unix 的补丁和程序.
BSD 慢慢地成长，替换了整套系统，最终成为了“和 Bell Unix 有相同代码”的 OS。

当时你仍然需要 Bell 的许可才能用整个系统。但由 Berkeley 开发的部分是以 BSD 协议公开的。
BSD 协议的内容是“爱干嘛干嘛，感谢我们就行”。
有很多 BSD 代码又回到了"正式"Unix 系统, 如 SystemIII, SystemV.

在 CSRG 解散, BSD 停止开发后, 一堆小组走上不同的道路。
有一组人是 386BSD，他们把 BSD 移植到了 i386。
386BSD 死后，FreeBSD 和 NetBSD 的两组人接手代码继续前进。
后来 NetBSD 又分出 OpenBSD。

我口中的 BSD 包括很多东西，包括口味和风格。这些可以在现存的 3 种 BSD 系统中看到：

- FreeBSD: 追求 i386 上的最佳性能
- NetBSD:  多平台
- OpenBSD: 注重安全

各 BSD 的目标有很多共通之处：大家都关心可移植性 / 性能 / 安全。
不同 BSD 间有大量共通代码。很多开发者为不止一个 BSD 做事。

敏锐的读者会发现我没有提到 Mac OSX 和下层的 Darwin。
这些确实也来自 BSD，但 OSX 的上层完全是苹果造。OSX 的用户感受到的是 OSX，不是 BSD。
理论上这文章也适用于 OSX，不过内容对了解 OSX 没帮助。
Darwin 比较像 BSD，不过 Darwin 用户都来自 BSD，不是本文的目标群体。

我主要讲 FreeBSD，因为我用这个而且最熟悉这个。
一般的观点对各 BSD 都通用。

和各 Linux 相比，各 BSD 的哲学十分相近。这文章就讲哲学。
