---
title: "Memo: Reactive (RxJava)"
publishAt: 2016-08-08
---

* toc
{:toc}

## Observable and peers

`A immutable asynchronous stream`

### Subscribe-able

Types that can be subscribed to:

```text
Base:
    Emitter<T>

Observable<T>: T* (Completion|Error)
    - Base reactive class

Single<T>: T (Completion | Exception)

Completable: Completion | Exception
    - effectively Single<Unit>

Maybe<T>: T? (Completion | Exception)
    - effectively Single<Unit?>

Flowable:
    - a backpressure-enabled base reactive class, new in RxJava 2.0
```

`subscribe` to one of them causes event to flow through observer.

### "Hot" and "Cold"


## Transformation and Operators

"transforms" a observable

```hs
-- map as in Array#map
map     :: Observable T1 -> (T1 -> T2) -> Observable T2

-- flatMap or (map and then flatten)
flatMap :: Observable T1 -> (T1 -> Observable T2) -> Observable T2

-- filter as in Array#filter
filter  :: Observable T1 -> (T1 -> bool) -> Observable T1

-- doOnNext: like Array#tap in ruby
doOnNext :: Observable T1 -> (T1 -> void) -> Observable T1
```

### Back pressure

- when consumer is not able to handle all events from upstream
- Makes difference on hot observables than cold ones

### Creating

1. `Observable<T> Observable.create(Observable.OnSubscript<T> onsubscribe)`
2. `Observable<T> Observable.just(T value)`

## Subscribe

1. A complete `Subscriber<T>` with `onNext` / `onCompleted` / `onError`
2. `Action1<T>` that only responds to `onNext`
    - Q: what if it completed / errored?

## Subscriber

- Observer



### Creation

- From existing collection: `Observable::create`
- From existing value: `Observable::Just`

## Threading


## Observe

`<Observable>#subscribe(<Observer>)`

## Generalization

I am still in a process to generalize different "value containers".

For a value type `T`, we have:
- `T` itself
    - exactly 1 value, already available for computation.
- Array: `T[]` or `Array<T>`
    - 0 or many values, already available for computation.
- Promise: `Promise<T>`
    - exactly 1 value, or exactly 1 error (or stay unresolved)
    - "timeless": then/catch handlers bound to a Promise gets executed after resolve
        - so is `subsequent` promises retured by then/catch
- `Observable<T>`:
    - 0 or many values, followed by a complete or a error (or never finishes)
    - handlers (subscribers)
    - `Flowable<T>` have same form but different behavior
- `Single<T>`
    - `Completable` is effectively `Single<Void>`

## Ref

- https://github.com/reactive-streams/reactive-streams-jvm/
