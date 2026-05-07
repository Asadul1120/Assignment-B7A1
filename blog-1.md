## Why is `any` labeled a "type safety hole," and why is `unknown`the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction

TypeScript মূলত JavaScript কে আরও safe করার জন্য তৈরি করা হয়েছে। এটি variable এর type check করে এবং ভুল operation আগে থেকেই ধরতে সাহায্য করে। কিন্তু কিছু ক্ষেত্রে data এর type আগে থেকে জানা থাকে না। এই ধরনের situation handle করার জন্য TypeScript এ `any` এবং `unknown` ব্যবহার করা হয়।

দেখতে এরা কিছুটা একই রকম হলেও এদের কাজের মধ্যে বড় পার্থক্য আছে।

## What is `any`?

`any` এমন একটি type যা TypeScript এর type checking system বন্ধ করে দেয়।

```ts
let data: any = "Hello";

data = 100;
data = true;
```
এখানে variable এর মধ্যে যেকোনো ধরনের value রাখা যাচ্ছে। এমনকি ভুল method ব্যবহার করলেও TypeScript error দেখায় না। যেমন:,
```ts
let value: any = 100;
value.toUpperCase();
```
এখানে toUpperCase() শুধুমাত্র string এর method। কিন্তু value হচ্ছে number। তবুও TypeScript কোনো error দেখাচ্ছে না। এই কারণেই any কে বলা হয় : “Type Safety Hole” কারণ এটি TypeScript এর safety system কে bypass করে দেয়। যদি সহজ করে বলি any ব্যবহার করলে TypeScript অন্ধ হয়ে যায়।


## What is `unknown`?

unknown data store করতে পারে। কিন্তু এটি any এর মতো unsafe না।

let value: unknown = "TypeScript"; এখন যদি আমরা সরাসরি method ব্যবহার করতে চাই value.toUpperCase();
TypeScript error দেখাবে। কারণ TypeScript জানে না value আসলে string নাকি অন্য কিছু।

তাই আগে type check করতে হবে।
```ts
if (typeof value === "string") {
value.toUpperCase();
}
```

এখানে আগে check করা হয়েছে value string কিনা। তারপর method ব্যবহার করা হয়েছে । সহজ ভাষায় বললে  unknown ব্যবহার করলে TypeScript সাবধানে check করে কাজ করতে দেয়।

## What is Type Narrowing?
Type narrowing হলো type check করে variable এর আসল কি type তা নির্ধারণ করার প্রসেস । টাইপ নির্ধারণ করার জন্য `typeof ` ব্যবহার করে যেকোনো data type check করা যায় ।

## Why is unknown Safer?
unknown safer কারণ এটি unsafe operation বন্ধ করে, type check করতে বাধ্য করে , runtime error কমায়,code reliability বাড়ায় । অন্যদিকে any TypeScript এর safety system দুর্বল করে দেয়।


## Conclusion
any এবং unknown দুইটাই unknown data handle করতে পারে। কিন্তু unknown অনেক বেশি safe কারণ এটি type checking maintain করে এবং developer কে type verify করতে বাধ্য করে। তাই modern TypeScript development এ unknown ব্যবহার করাই better practice।