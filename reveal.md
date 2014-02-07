# JS LEGOS

##### REUSABLE UI PATTERNS IN JAVASCRIPT


## TYLER BENZIGER

github.com/tybenz&nbsp;&nbsp;||&nbsp;&nbsp;@tybenz&nbsp;&nbsp;||&nbsp;&nbsp;tybenz.com


# ![](http://awes0.me/adobe.png)


# ![](http://awes0.me/jquery.png)


## WHAT WE'LL COVER

Decoupling HTML, CSS, and JS

~~UI Patterns~~

~~The JavaScript~~


## WHAT WE'LL COVER

~~Decoupling HTML, CSS, and JS~~

UI Patterns

~~The JavaScript~~


## WHAT WE'LL COVER

~~Decoupling HTML, CSS, and JS~~

~~UI Patterns~~

The JavaScript


# UI PATTERNS


# ![](http://awes0.me/slider.gif)


# ![](http://awes0.me/slider.png)


# ![](http://awes0.me/colorpicker.gif)


# ![](http://awes0.me/colorpicker.png)


# ![](http://awes0.me/kahn-menu.gif)


# ![](http://awes0.me/kahn-menu.png)


# ![](http://awes0.me/radial-menu.gif)


# ![](http://awes0.me/radial-menu1.png)


# ![](http://awes0.me/radial-menu2.png)


# DECOUPLE

HTML => structure

CSS => style

JS => behavior/interaction


# WHAT IT MEANS

Style only happens in CSS

Animation only happens in CSS

JS shouldn't care about markup


```html
<ul class="task-list">
    <li class="task">
        <input type="checkbox" name="groceries" />
        Groceries
    </li>
    <li class="task">
        <input type="checkbox" name="homework" />
        Homework
    </li>
    <li class="task">
        <input type="checkbox" name="write_code" />
        Write Code
    </li>
</ul>
```


```javascript
$( '.task input[type=checkbox]' ).on( 'change', function () {
    if ( this.checked ) {
        $( this ).closest( '.task' ).addClass( 'completed' );
    }
});
```


```css
.task {
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

.task.complete {
    display: none;
}
```


```css
.task {
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

.task.complete {
    animation: fadeout 1s ease-out;
    opacity: 0;
    height: 0;
    margin-bottom: 0;
    padding: 0;
}

@keyframes fadeout {
    0% { opacity: 1; }
    20% { opacity: 0; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
}
```


## OPTIONS + EVENTS


# INHERITANCE


```javascript
var Lego = Class.extend({
    defaultOptions: {},

    init: function ( el, options ) {
        this.$el = $( el );

        this.options = $.extend(
            {},
            this.defaultOptions,
            options
        );
    },

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }
});
```


# EXAMPLE


```javascript
var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {
        this._super( el, options );

        this.$el.on( this.options.applyEvent, function () {
            self.apply();
            self.trigger( 'secret-apply' );
        });

        this.$el.on( this.options.removeEvent, function () {
            self.apply();
            self.trigger( 'secret-remove' );
        });
    },

    // ...

});
```


```javascript
var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {
        // ...
    },

    apply: function () {
        this.$el.addClass( this.options.applyClass );
    },

    remove: function () {
        this.$el.addClass( this.options.removeClass );
    }
});
```


```javascript
var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );

secret1.on( 'secret-apply', function () {
    secret2.apply();
});

secret1.on( 'secret-remove', function () {
    secret2.remove();
});
```


```javascript
$( '.slice' ).each( function() {

    var secret = new Secret( this, {
        applyEvent: 'mouseover',
        removeEvent: 'mouseout'
    });

});
```


# lego.js

github.com/tybenz/lego.js


## TYLER BENZIGER

~~github.com/tybenz&nbsp;&nbsp;||&nbsp;&nbsp;~~@tybenz~~&nbsp;&nbsp;||&nbsp;&nbsp;tybenz.com~~


## TYLER BENZIGER

github.com/tybenz&nbsp;&nbsp;||&nbsp;&nbsp;@tybenz&nbsp;&nbsp;||&nbsp;&nbsp;tybenz.com


# THANKS!
