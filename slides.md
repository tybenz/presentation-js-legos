# JS LEGOS :

## REUSABLE  UI  PATTERNS

## IN  JAVASCRIPT


# TYLER BENZIGER

github.com/tybenz // @tybenz // tybenz.com


# ADOBE


# JQUERY CONFERENCE


# WHAT WE'LL COVER

• Decoupling HTML, CSS, and JS

• UI Patterns

• The JavaScript


# UI PATTERNS


# THE NEED TO DECOUPLE

• HTML = structure

• CSS = style *

• JS = behavior/interaction


# WHAT IT MEANS

• Style only happens in CSS

• Animation only happens in CSS

• JS shouldn't care about markup


## HTML

```html
<div class="task-list">
    <div class="task"><input type="checkbox" name="groceries" /> Groceries</div>
    <div class="task"><input type="checkbox" name="homework" /> Homework</div>
    <div class="task"><input type="checkbox" name="write_code" /> Write Code</div>
</div>
```


## JAVASCRIPT

```javascript
$( '.task input[type=checkbox]' ).on( 'change', function () {
    if ( this.checked ) {
        $( this ).closest( '.task' ).addClass( 'completed' );
    }
});
```


## CSS
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


## ANIMATIONS

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
    0% { opacity: 1; height: auto; margin-bottom: 10px; padding:10px; }
    20% { opacity: 0; height: auto; margin-bottom: 10px; padding:10px; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
}
```


# OPTIONS + EVENTS


# INHERITANCE


```javascript

// Class object comes from http://ejohn.org/blog/simple-javascript-inheritance/
var Lego = Class.extend({
    defaultOptions: {},

    init: function ( el, options ) {
        this.$el = $( el );

        this.options = $.extend( {}, this.defaultOptions, options );
    },

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }
});
```


# EXAMPLE TIME


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

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
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


# TYLER BENZIGER

{~github.com/tybenz //~} @tybenz {~// tybenz.com~}


# TYLER BENZIGER

github.com/tybenz // @tybenz // tybenz.com


# THANKS!
