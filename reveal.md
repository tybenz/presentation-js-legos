# JS LEGOS

##### REUSABLE UI PATTERNS IN JAVASCRIPT

<div style="font-size: 0.5em">
If you're here for the examples, jump to the [end](#/1000000).
</div>


## TYLER BENZIGER

github.com/tybenz&nbsp;&nbsp;&#8226;&nbsp;&nbsp;@tybenz

tybenz@adobe.com&nbsp;&nbsp;&#8226;&nbsp;&nbsp;tybenz.com


# ![](https://raw.github.com/tybenz/vimdeck/master/img/demo1.png)


# ![](https://raw.github.com/tybenz/spamthenet/gh-pages/img/logo.png)


# ![](http://awes0.me/adobe.png)


# ![](http://awes0.me/jquery.png)


# WebPro


## WHAT WE'LL COVER

UI Patterns

Decoupling HTML, CSS, and JS

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


```html
<ul class="task-list">{~
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
    </li>~}
</ul>
```


```html
{~<ul class="task-list">
    ~}<li class="task">
        <input type="checkbox" name="groceries" />
        Groceries
    </li>{~
    <li class="task">
        <input type="checkbox" name="homework" />
        Homework
    </li>
    <li class="task">
        <input type="checkbox" name="write_code" />
        Write Code
    </li>
</ul>~}
```


```html
{~<ul class="task-list">
    <li class="task">~}
        <input type="checkbox" name="groceries" />{~
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
</ul>~}
```


```html
{~<ul class="task-list">
    <li class="task">
        <input type="checkbox" name="groceries" />~}
        Groceries{~
    </li>
    <li class="task">
        <input type="checkbox" name="homework" />
        Homework
    </li>
    <li class="task">
        <input type="checkbox" name="write_code" />
        Write Code
    </li>
</ul>~}
```


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


```javascript
{~$(~} '.task input[type=checkbox]' {~).on( 'change', function () {
    if ( this.checked ) {
        $( this ).closest( '.task' ).addClass( 'completed' );
    }
});~}
```


```javascript
{~$( '.task input[type=checkbox]' ).~}on{~(~} 'change'{~, function () {
    if ( this.checked ) {
        $( this ).closest( '.task' ).addClass( 'completed' );
    }
});~}
```


```javascript
{~$( '.task input[type=checkbox]' ).on( 'change', function () {
    ~}if ( this.checked ){~ {
        $( this ).closest( '.task' ).addClass( 'completed' );
    }
});~}
```


```javascript
{~$( '.task input[type=checkbox]' ).on( 'change', function () {
    if ( this.checked ) {
        ~}$( this ).closest( '.task' ){~.addClass( 'completed' );
    }
});~}
```


```javascript
{~$( '.task input[type=checkbox]' ).on( 'change', function () {
    if ( this.checked ) {
        $( this ).closest( '.task' ).~}addClass( 'completed' ){~;
    }
});~}
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

{~.task.complete {
    display: none;
}~}
```


```css
{~.task {
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}~}

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
    0% { opacity: 1; height: auto; margin-bottom: 10px; padding:10px; }
    20% { opacity: 0; height: auto; margin-bottom: 10px; padding:10px; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
}
```


```css
.task {
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

{~.task.complete {
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
}~}
```


```css
{~.task {
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}~}

.task.complete {
    animation: fadeout 1s ease-out;
    opacity: 0;
    height: 0;
    margin-bottom: 0;
    padding: 0;
}

{~@keyframes fadeout {
    0% { opacity: 1; height: auto; margin-bottom: 10px; padding:10px; }
    20% { opacity: 0; height: auto; margin-bottom: 10px; padding:10px; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
}~}
```


```css
{~.task {
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
}~}

@keyframes fadeout {
    0% { opacity: 1; height: auto; margin-bottom: 10px; padding:10px; }
    20% { opacity: 0; height: auto; margin-bottom: 10px; padding:10px; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
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
    0% { opacity: 1; height: auto; margin-bottom: 10px; padding:10px; }
    20% { opacity: 0; height: auto; margin-bottom: 10px; padding:10px; }
    100% { opacity: 0; height: 0; margin-bottom: 0px; }
}
```


# EXAMPLE TIME


# BLACK BOX


```javascript
$.fn.secret = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();
```


```javascript
$.fn.secret{~ = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();~}
```


```javascript
{~$.fn.secret = function () {
    ~}this.on{~(~} 'mousedown'{~, function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();~}
```


```javascript
{~$.fn.secret = function () {
    this.on( 'mousedown', function () {
        ~}$( this ).addClass( 'show' );{~
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();~}
```


```javascript
{~$.fn.secret = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });~}

    this.on{~(~} 'mouseup'{~, function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();~}
```


```javascript
{~$.fn.secret = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        ~}$( this ).removeClass( 'show' );{~
    });
};

$( '.secret' ).secret();~}
```


```javascript
{~$.fn.secret = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};~}

$( '.secret' ).secret();
```


```javascript
$.fn.secret = function () {
    this.on( 'mousedown', function () {
        $( this ).addClass( 'show' );
    });

    this.on( 'mouseup', function () {
        $( this ).removeClass( 'show' );
    });
};

$( '.secret' ).secret();
```


# FRAMEWORK BASED


```javascript
var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();
```


```javascript
{~var Secret =~} Backbone.View.extend{~({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    ~}el: '.secret'{~,

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',~}

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    }{~,

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        ~}this.$el.addClass( 'show' );{~
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );~}
        this.trigger( 'apply' );{~
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        ~}this.$el.removeClass( 'show' ); {~
        this.trigger( 'remove' );
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        ~}this.trigger( 'remove' );{~
    }
});

var secret = new Secret();~}
```


```javascript
{~var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});~}

var secret = new Secret();
```


```javascript
var Secret = Backbone.View.extend({
    el: '.secret',

    events: {
        'mousedown': 'apply',
        'mouseup': 'remove'
    },

    apply: function () {
        this.$el.addClass( 'show' );
        this.trigger( 'apply' );
    },

    remove: function () {
        this.$el.removeClass( 'show' );
        this.trigger( 'remove' );
    }
});

var secret = new Secret();
```


## OPTIONS + EVENTS


# INHERITANCE


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
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


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
{~var Lego = Class.extend({
    defaultOptions: {},

    ~}init: function ( el, options ) {{~
        this.$el = $( el );

        this.options = $.extend( {}, this.defaultOptions, options );
    },

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }
});~}
```


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
{~var Lego = Class.extend({
    defaultOptions: {},

    init: function ( el, options ) {~}
        this.$el = $( el );{~

        this.options = $.extend( {}, this.defaultOptions, options );
    },

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }
});~}
```


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
{~var Lego = Class.extend({
    defaultOptions: {},

    init: function ( el, options ) {
        this.$el = $( el );~}

        this.options = $.extend( {}, this.defaultOptions, options );{~
    },

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }
});~}
```


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
{~var Lego = Class.extend({
    defaultOptions: {},

    init: function ( el, options ) {
        this.$el = $( el );

        this.options = $.extend( {}, this.defaultOptions, options );
    },~}

    trigger: function ( evt, data ) {
        $( this ).trigger( evt, data );
    },

    on: function ( evt, fn ) {
        $( this ).on( evt, fn );
    }{~
});~}
```


```javascript
// Class stuff: http://ejohn.org/blog/simple-javascript-inheritance/
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
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});
```


```javascript
{~var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {~}
        this._super( el, options );{~

        this.$el.on( this.options.applyEvent, function () {
            self.apply();
            self.trigger( 'secret-apply' );
        });

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {
        this._super( el, options );~}

        this.$el.on{~(~} this.options.applyEvent{~, function () {
            self.apply();
            self.trigger( 'secret-apply' );
        });

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({ ~}
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    }{~,

    init: function ( el, options ) {
        this._super( el, options );

        this.$el.on( this.options.applyEvent, function () {
            self.apply();
            self.trigger( 'secret-apply' );
        });

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {
        this._super( el, options );

        this.$el.on( this.options.applyEvent, function () {~}
            self.apply();{~
            self.trigger( 'secret-apply' );
        });

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({
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
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },~}

    apply: function () { this.$el.addClass( this.options.applyClass ); }{~,

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({
    defaultOptions: {
        applyClass: 'show',
        applyEvent: 'mousedown',
        removeEvent: 'mouseup'
    },

    init: function ( el, options ) {
        this._super( el, options );

        this.$el.on( this.options.applyEvent, function () {
            self.apply();~}
            self.trigger( 'secret-apply' );{~
        });

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


```javascript
{~var Secret = Lego.extend({
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
        });~}

        this.$el.on( this.options.removeEvent, function () {
            self.remove();
            self.trigger( 'secret-remove' );
        });{~
    },

    apply: function () { this.$el.addClass( this.options.applyClass ); },

    remove: function () { this.$el.addClass( this.options.removeClass ); }
});~}
```


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
            self.remove();
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
var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );{~

secret1.on( 'secret-apply', function () {
    secret2.apply();
});

secret1.on( 'secret-remove', function () {
    secret2.remove();
});~}
```


```javascript
{~var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );~}

secret1.on{~(~} 'secret-apply'{~, function () {
    secret2.apply();
});

secret1.on( 'secret-remove', function () {
    secret2.remove();
});~}
```


```javascript
{~var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );

secret1.on( 'secret-apply', function () {~}
    secret2.apply();{~
});

secret1.on( 'secret-remove', function () {
    secret2.remove();
});~}
```


```javascript
{~var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );

secret1.on( 'secret-apply', function () {
    secret2.apply();
});~}

secret1.on{~(~} 'secret-remove'{~, function () {
    secret2.remove();
});~}
```


```javascript
{~var secret1 = new Secret( '#secret1' ),
    secret2 = new Secret( '#secret2' );

secret1.on( 'secret-apply', function () {
    secret2.apply();
});

secret1.on( 'secret-remove', function () {~}
    secret2.remove();{~
});~}
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
$.each( $( '.slice' ), function ( index, slice ) {
    var secret = new Secret( $( slice ), {
        applyEvent: 'mouseover',
        removeEvent: 'mouseout'
    });
});
```


```javascript
{~$.~}each{~( $(~} '.slice' {~), function ( index, slice ) {
    var secret = new Secret( $( slice ), {
        applyEvent: 'mouseover',
        removeEvent: 'mouseout'
    });
});~}
```


```javascript
{~$.each( $( '.slice' ), function ( index, slice ) {
    var secret =~} new Secret{~( $( slice ), {
        applyEvent: 'mouseover',
        removeEvent: 'mouseout'
    });
});~}
```


```javascript
{~$.each( $( '.slice' ), function ( index, slice ) {
    var secret = new Secret( $( slice ), { ~}
        applyEvent: 'mouseover'{~,~}
        removeEvent: 'mouseout'{~
    });
});~}
```


```javascript
$.each( $( '.slice' ), function ( index, slice ) {
    var secret = new Secret( $( slice ), {
        applyEvent: 'mouseover',
        removeEvent: 'mouseout'
    });
});
```


# lego.js

github.com/tybenz/lego.js


# THANKS!

github.com/tybenz&nbsp;&nbsp;&#8226;&nbsp;&nbsp;@tybenz

tybenz@adobe.com&nbsp;&nbsp;&#8226;&nbsp;&nbsp;tybenz.com


## EXAMPLES

[Numeric Spinner](http://tybenz.com/presentation-js-legos/demos/spinner)

[Tabs == Accordion == Slideshow](http://tybenz.com/presentation-js-legos/demos/tabs)

[Task List](http://tybenz.com/presentation-js-legos/demos/tasks)

[Secret Component](http://tybenz.com/demos/legos/secret.html)

[Master Slave Secret Component](http://tybenz.com/demos/legos/secret4.html)

[Animated GIF Scrubber](http://tybenz.com/demos/legos/secret5.html)

[Animated GIF Scrubber (Debug)](http://tybenz.com/demos/legos/secret5.html?debug=true)
