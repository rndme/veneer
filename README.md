Veneer HTML Tags
========
Custom Elmements for Custom Applications

See project page at <http://danml.com/veneer/> for demos, unit tests, and more


### What is does
allows custom HTML tags names, syncs those tag's properties and attributes, and provides a structure for scripting basic interactivity.

### Why Veneer?
Veneer.js was created to enable custom element definitions that can be loaded from a single script tag; no build process, executable software, deep folders of dependencies, or publishing headaches required. With veneer, you can develop your site or application using the custom elements, link the veneer script tag, and go home early. If you have existing publish routines, veneer can stay out of the way, or be managed as the set of plain vanilla javascript files that define the custom elements.

veneer.js is related to projects like polymer.js and x-tags, but far simpler, somewhat less encompassing, and much smaller ( 5kb-16kb gzipped). Adding a single script file enables about everything you see here, and adding more elements is easy and simple.

The provided function _veneer(tagName, definition)_ is much comparable to _Polymer('proto-element', {...})_ or _xtag.register(tagName, {...})_. It allows the strong-type syncing of properties and attributes, defining the look via css, customizing the behavior via delegated events, and defining default property values for custom properties and attributes. In short, it's enough to build highly flexible and reusable custom tags, without being dogmatic about the details.

### Why Custom-Elements ?
We've all seen widgets before, some prettier than others, what makes custom HTML elements more than a gimmick? Self-Initialization means that custom element widgets make themselves functional upon being added, no _$.ready()_ calls needed. this also means you can inject widget markup into the page and it starts working, you don't have to manually re-scan and re-initialize any plugins. Widgets can now embed other widgets, and everything just works. This makes ajax navigation on complex interactive sites practical.



### Definition Properties
Element definitions can utilize any of the following properties to create the widget:

#### proto
allows you to set the prototype of the custom element to a clone of any object to incorporate its functionality into your element. Ex: HTMLInputElement, default: HTMLElement

#### events
The events object allows you to bind events to the custom tag and sub-tags. Delegation automatic and is achieved by not filtering out [lang=shadow] in a given event handler. These properties are fed to AddEventListener, and utilize normal event features.

#### defaults
An object of tag property defaults to fill-in any un-provided data for each tag by property name.

#### props
An object that defines the types of properties auto-bound to attributes. Each value is a primitive constructor, or any normally-returning function to turn a string attrib name into a property that reflects a Number or Boolean, or even a composite Object. You can also use an object for the value to customize the behaviour of the property; see the "custom props" section...

#### css
Defines the look of the tag and sub-tags. Unlike Polymer, these is no poly-filled scoping for CSS (it's very slow), so be sure to use your tag name as a namespace in your CSS rules.

#### methods
Defines methods inherited by each element instance.


Custom props
Instead of using a constructor function for a property def, you can use a definition object, which opens up some extra options.

#### attr
Lets the attribute name differ from the property name (the key of the def)

#### observe
true or false: should altering this property fire an update event on the element?

#### type
a constructor function like you would use in a non-object property definition

#### value
Specifies a default value for the property, over-riding any default value specified in defaults.

#### get/set
Regular getters and setters like the ones used in Object.defineProperty's get functions. The default getter calls the type function on the getAttribute(propName) value.	The default setter simply calls elm.setAttribute with the new value. 

Set has a special behaviour in relation to the normal setting behaviour. By returning true in the setter, instead of the normal nothing, you can prevent the attribute value from updating and the update() event from firing. if you use {set: Boolean.bind(1,1)}, it's acts like a simple void, preventing further action and keeping the property.


### Lifecycle Events
These DOM events are raised on the Element as it progresses through it's life. They all have e.target as the Element, just like all DOM events, so normal event handlers work with them; ex: _elm.addEventListener("insert", function(e){ ... })_.

#### init
Fired when the Element first created, before all the other properties, events, and defaults are applied. This should be thought of as a macro-like layer to modify the unknown element instance before everything else happens. More often it's handier to use the insert event to initialize the custom tag in cosideration of all it's properties and defaults being applied, but before it's inserted into the document.

#### insert
Fired when the Element is added to the document's DOM.

#### update
Fired when a property or attribute defined in props changes. It can also be manually fired at runtime by calling _element.change()_. If you don't define an insert event, update fires upon creation to provide initialize and modify capabilities to a single handler. To prevent update from firing at creation, define insert, even if just as "String" or some other do-nothing function.

#### remove
Fired when the Element is removed from the document's DOM.


### Utility Methods
There are also a few common utility methods tacked on to the _veneer()_ function:

#### veneer._(objCollection) => Array
Turns a lengthy object into a true Array

#### veneer.$(strCssSelector, optElmRoot) => Array of Elements
Turns a CSS selector into an array. Specify a custom parent by passing an element as the 2nd argument.

#### veneer.elm(tagName, objAttribs, strInnerHTML)
Create a new HTML element by tag name, passing attributes as an object (optional) and content as a string (optional).

#### veneer.template(objData, strTemplate) => String (composited)
A very simple/fast template tool to insert object property values by name into a string using {{propertyName}}-style placeholders.

#### veneer.include(strJsUrl)
Adds a new script to the document by url.

#### veneer.css(strCSS)
Injects a string of CSS into the document.

#### veneer.importHTML(strHtmlUrl)
Adds HTML content to the document's head by url.

#### veneer.ajax(strUrl, fnCallBack)
Loads a file/url and passes the result to a callback function as fnCallBack(x.responseText, x)

#### veneer.raiseEvent(strEventName, element, objDetails)
Fires a native Custom Event on the Element with the details passed in an optional argument.



### Custom Element Tags
veneer-element tags define a custom element using html instead of JS. It is essentially sugar on top of the JS interface, but can save you from escaping CSS and HTML inside a JS file. Different parts of the tag and its contents get mapped to a normal veneer() call.

The veneer definition properties are mapped as follows:

#### tag name
Taken from the veneer-element's name attribute.

#### proto
Name of constructor given by proto attribute on veneer-element

#### content
Via a template tag's contents inside of veneer-element.

#### props
Attributes naming functions on veneer-element tag EXCEPT those matching /^on/ or "name" or "id" or "class".

#### defaults
Attributes on an inner template tag EXCEPT those matching /^on/ or "name" or "id" or "class" will define a default value (ran through the corresponding props's constructor). You must define a prop on the veneer-element to define a default.

#### css
via style tag inside of veneer-element.

#### simple events
Defined by using on+theEventName as 'event attributes' on veneer-element.

#### complex events
Code in script tag of type=shadow inside of veneer-element runs on creation. Inside the code you can use _this.addEventListener()_ to bind regular and custom events.
