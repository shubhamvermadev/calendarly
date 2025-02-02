# 🚧 Package Under Progress 🚧


# 📅 `@svpkg/calendarly` – A Simple & Flexible React Calendar Component  

`@svpkg/calendarly` is a lightweight, customizable calendar component built with React, Day.js, and CSS. It provides both single-date and date-range selection with an intuitive UI.  

## ✨ Features  

✅ Single and multiple-month view  
✅ Quick selection options (Today, Yesterday, This Week, etc.)  
✅ Single-date and date-range selection  
✅ Minimal dependencies (React + Day.js)  
✅ Fully customizable  

---

## 🚀 Installation  

```sh
npm install @svpkg/calendarly
```

or  

```sh
yarn add @svpkg/calendarly
```

---

## 🛠️ Usage  

### Basic Example  

```tsx
import { Calendarly } from "@svpkg/calendarly";

<Calendarly 
    type="single" 
    isRange={false} 
    quickSelection={true} 
    onSelect={(date) => console.log("Selected date:", date)}
/>
```

### Props  

| Prop             | Type      | Description |
|-----------------|----------|-------------|
| `type`          | `"single"` \| `"multiple"` | `"single"` shows one month, `"multiple"` shows two months side by side. |
| `isRange`       | `boolean` | If `true`, enables date range selection. If `false`, allows single date selection. |
| `quickSelection` | `boolean` | If `true`, displays quick selection options like Today, This Week, etc. |
| `onSelect`      | `(date: string \| [string, string]) => void` | Callback function triggered on date selection. Returns either a single date or a date range. |

---

## 📌 Example Use Cases  

### 1️⃣ Single-Date Picker  

```tsx
<Calendarly 
    type="single"
    isRange={false}
    quickSelection={false}
    onSelect={(date) => console.log("Selected:", date)}
/>
```

![single calendar](https://github.com/shubhamvermadev/public_images/blob/master/packages/calendarly/single.png?raw=true)

### 📆 Date-Range Picker  

```tsx
<Calendarly 
    type="multiple"
    isRange={true}
    quickSelection={true}
    onSelect={(range) => console.log("Selected Range:", range)}
/>
```
![Multiple calendar](https://github.com/shubhamvermadev/public_images/blob/master/packages/calendarly/multiple.png?raw=true)
---
<!-- 
## 🎨 Customization  

You can style `Calendarly` by overriding the default CSS in `Calendar.css`.   -->

## 🔥 Why Use `@svpkg/calendarly`?  

✔ No external calendar packages – pure React & Day.js  
✔ Simple, minimal UI with easy customization  
✔ Quick date selection options for faster input  

---

## 📜 License  

MIT License. Feel free to use  

---

Enjoy using `@svpkg/calendarly`? 🌟 Star the repo on [github](https://github.com/shubhamvermadev/calendarly) and share your feedback! 🚀


