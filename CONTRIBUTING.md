# Developer Guide: Updating the Homelab Master Plan

This project is a dynamic web application that renders a structured homelab roadmap from a JSON-like data file.

## 1. Updating Content (`data.js`)
All text, tables, and notes live in `data.js`. The `PLAN_DATA` array contains section objects.

### Adding a New Section
```javascript
{
    id: "unique-section-id",
    title: "My New Section",
    elements: [
        { type: "p", content: "Some description here." },
        { 
            type: "table", 
            headers: ["Service", "Note"], 
            rows: [
                ["<a href='https://link.com' target='_blank'>MyService</a>", "Notes"]
            ] 
        }
    ]
}
```

### Element Types
- `p`: Paragraph. Supports HTML like `<strong>` or `<code>`.
- `h2` / `h3`: Sub-headers.
- `list`: Bullet points. Use `items: ["one", "two"]`.
- `table`: Data tables. Use `headers: []` and `rows: [[]]`.
- `note` / `warning` / `critical`: Colored alert boxes.

## 2. Updating Navigation (`script.js`)
The sidebar is controlled by the `NAV_TREE` constant in `script.js`. It supports infinite nesting.

### Adding a Link
Add an object with an `id` matching the section ID in `data.js`:
```javascript
{ id: "my-section-id", title: "Sidebar Display Name" }
```

### Adding a Nested Group
Add an object with a `name` and a `children` array:
```javascript
{
    name: "Parent Category",
    children: [
        { id: "child-id", title: "Child" },
        { 
            name: "Sub-Group", 
            children: [...] 
        }
    ]
}
```

## 3. Row Coloring (Severity)
The renderer automatically checks for "Severity" or "Difficulty" in table headers.
- If a cell contains **"Critical"**, **"High"**, or **"8/10"**+, the row turns red.
- If a cell contains **"Warning"**, **"Medium"**, or **"5/10"**-**"7/10"**, the row turns yellow.

## 4. Hyperlinking
Always use the following format for links inside table cells or paragraphs to ensure they open in a new tab:
```html
<a href="URL" target="_blank">Name</a>
```

## 5. CSS & Styling
- Theme variables are defined in `:root` and `[data-theme="dark"]` in `style.css`.
- The sidebar uses `position: sticky` to stay visible while scrolling.
