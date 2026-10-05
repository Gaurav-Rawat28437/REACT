DOM manipulation is a heavy task.

Why DOM manipulation is heavy

The browser must:

Update the DOM
Recalculate layout
Repaint the screen

This takes time and slows the page.

VDOM (Virtual DOM) in React is a virtual (fake) copy of the real DOM.

Why React uses VDOM

Direct DOM updates are slow, so React first updates the Virtual DOM, then updates the real DOM only where needed.

How it works
React creates Virtual DOM( make a copy of DOM)
State changes
React compares old VDOM vs new VDOM
Updates only the changed part in the real DOM
Example

If a page has:

<h1>Hello</h1>
<p>Welcome</p>

If only <h1> changes, React updates only that element, not the whole page.

Simple definition

VDOM = lightweight copy of the DOM used by React to make UI updates faster.


In normal DOM (without React), JavaScript directly changes the real DOM.

How normal DOM works
Browser loads HTML → creates DOM
JavaScript changes the DOM directly
Browser updates the page
Example (Normal DOM)
document.getElementById("title").innerText = "Hello"

Here JavaScript directly modifies the real DOM.

Problem

If many changes happen:

DOM updates many times
Browser recalculates layout
Page becomes slower
Difference
Normal DOM           	    React Virtual DOM
Directly updates DOM	    Uses Virtual DOM first
Slower for many updates	    Faster
Full DOM manipulation	    Updates only changed part

✅ Short:
Normal DOM = JavaScript directly changes the webpage structure.


In React two important concepts are Reconciliation and Diffing.

1️⃣ Diffing

Diffing means comparing two Virtual DOMs.

React compares:

old Virtual DOM
new Virtual DOM

to find what changed.

Example:

<h1>Hello</h1>

changes to

<h1>Hello Gaurav</h1>

React detects only text changed.

2️⃣ Reconciliation

Reconciliation is the process of updating the real DOM after diffing.

Steps:

State changes
New Virtual DOM created
Diffing finds the difference
Reconciliation updates the real DOM

✅ Short definition

Diffing: comparing old and new Virtual DOM
Reconciliation: updating the real DOM with those changes.


If tag changes, React creates a new DOM node.
If tag is same, React updates only the changed content.