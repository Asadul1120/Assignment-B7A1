## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

TypeScript এর সবচেয়ে powerful feature গুলোর মধ্যে Generics অন্যতম। Generics ব্যবহার করে reusable function, component, এবং class তৈরি করা যায়। একই function বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে, কিন্তু type safety ঠিক থাকে।

Generics মূলত code reuse করার জন্য ব্যবহার করা হয় যাতে একই logic বারবার লিখতে না হয়।

## What is Generics?

Generics এমন একটি feature যা function বা class কে flexible করে তোলে। এটি different type এর data handle করতে পারে।

সাধারণত generic type বোঝাতে `T`, `K`, `U` এর মতো letter ব্যবহার করা হয়।

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে T যেকোনো type হতে পারে।

## How Generics Work

একই function বিভিন্ন ধরনের data এর সাথে কাজ করতে পারে। যেমন:,

```ts
identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

এখানে একই function string, number, এবং boolean data handle করছে।

## Why Generics are Useful

Generics এর সবচেয়ে বড় সুবিধা হলো reusable code তৈরি করা। যদি Generics ব্যবহার না করা হয় তাহলে string, number, বা boolean এর জন্য আলাদা আলাদা function লিখতে হতো। কিন্তু Generics ব্যবহার করলে একটি function দিয়েই সব type handle করা যায়।

## Type Safety

Generics reusable code তৈরি করলেও type safety নষ্ট করে না। TypeScript automatically বুঝতে পারে কোন type return হবে। এর ফলে ভুল type ব্যবহার করলে TypeScript error দেখায়।

## Conclusion

Generics TypeScript development কে আরও flexible এবং powerful করে। এটি reusable code তৈরি করতে সাহায্য করে এবং একই সাথে type safety বজায় রাখে। বড় project এ clean, maintainable, এবং scalable code লেখার জন্য Generics খুব গুরুত্বপূর্ণ।
