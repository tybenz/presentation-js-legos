# JS LEGOS

```markdown
    REUSABLE UI COMPONENTS IN JAVASCRIPT
```


# TYLER BENZIGER

tybenz@adobe.com || @tybenz || github.com/tybenz || tybenz.com


# VIMDECK


# SPAMTHE.NET

\#spamthenet || @spamthenet || spamthe.net || weekly@spamthe.net


# ADOBE


# JQUERY


# WEB PRO


# WHAT WE'LL COVER

• UI Patterns{~

• Decoupling HTML, CSS, and JS

• The JavaScript~}


# WHAT WE'LL COVER

{~• UI Patterns~}

• Decoupling HTML, CSS, and JS{~

• The JavaScript~}


# WHAT WE'LL COVER

{~• UI Patterns

• Decoupling HTML, CSS, and JS~}

• The JavaScript


# UI PATTERNS


# DECOUPLE

• HTML => structure

{~• CSS => style

• JS => behavior/interaction~}


# DECOUPLE

{~• HTML => structure~}

• CSS => style

{~• JS => behavior/interaction~}


# DECOUPLE

{~• HTML => structure

• CSS => style~}

• JS => behavior/interaction


# WHAT IT MEANS

• Style only happens in CSS

{~• Animation only happens in CSS

• JS shouldn't care about markup~}


# WHAT IT MEANS

{~• Style only happens in CSS~}

• Animation only happens in CSS

{~• JS shouldn't care about markup~}


# WHAT IT MEANS

{~• Style only happens in CSS

• Animation only happens in CSS~}

• JS shouldn't care about markup


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

 
{~<ul class="task-list">~}
    <li class="task">{~
        <input type="checkbox" name="groceries" />
        Groceries~}
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


```scss

 
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


# PROS vs CONS

```markdown
{~1. Modular                               1. Basic

                                         2. User ignorance~}
```


# PROS vs CONS

```markdown
1. Modular{~                               1. Basic

                                         2. User ignorance~}
```


# PROS vs CONS

```markdown
1. Modular                               1. Basic{~

                                         2. User ignorance~}
```


# PROS vs CONS

```markdown
1. Modular                               1. Basic

                                         2. User ignorance
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


# PROS vs CONS

```markdown
{~1. Event-driven                          1. Backbone-dependent

2. Cleanly organized~}
```


# PROS vs CONS

```markdown
1. Event-driven{~                          1. Backbone-dependent~}

{~2. Cleanly organized~}
```


# PROS vs CONS

```markdown
1. Event-driven                          {~1. Backbone-dependent~}

2. Cleanly organized
```


# PROS vs CONS

```markdown
1. Event-driven                          1. Backbone-dependent

2. Cleanly organized
```


# PROS

```markdown
1. Event-driven

2. Cleanly organized
```


# PROS

```markdown
1. Event-driven

2. Cleanly organized

3. Modular
```


# PROS

```markdown
1. Event-driven

2. Cleanly organized

3. Modular

4. Flexible/customizable
```


# OPTIONS + EVENTS


# INHERITANCE


```javascript

 
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

 
{~var Lego = Class.extend({
    defaultOptions: {},~}

    init: function ( el, options ){~ {
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
});~}
```


```javascript

 
{~var Secret = Lego.extend({~}
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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

    remove: function () { this.$el.removeClass( this.options.applyClass ); }
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
    var secret = new Secret( $( slice ), {~}
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


# RECAP


# lego.js

```markdown
 
github.com/tybenz/lego.js
```


# THANKS!

tybenz@adobe.com || @tybenz || github.com/tybenz || tybenz.com
