Lego.Slideshow = Lego.extend({
  defaultOptions: {
    playBtnSelector: '.slideshow-play-btn',
    stopBtnSelector: '.slideshow-stop-btn',
    thumbSelector: '.slideshow-slide-link',
    slideSelector: '.slideshow-slide',
    activeEvent: 'click',
    autoPlay: true,
    interval: 1000
  },

  init: function ( el, options ) {
    this._super( el, options );

    var self = this;
    var opts = this.options;
    this.tabGroup = new Lego.RadioGroup( this.$el.find( opts.thumbSelector ), {
      activeEvent: opts.activeEvent
    });
    this.panelGroup = new Lego.PanelGroup( this.$el.find( opts.slideSelector ), {
      tabGroups: [ this.tabGroup ],
      activeEvent: opts.activeEvent
    });

    if ( opts.autoPlay ) {
      this.play();
    }

    this.$el.find( opts.playBtnSelector ).on( opts.activeEvent, function onPlayClick( evt ) {
      evt.preventDefault();

      self.play();
    })

    this.$el.find( opts.stopBtnSelector ).on( opts.activeEvent, function onstopClick( evt ) {
      evt.preventDefault();

      self.stop();
    })

    this.tabGroup.$el.on( opts.activeEvent, function onThumbClick( evt ) {
      evt.preventDefault();

      self.stop();
      self.tabGroup._handleActiveEvent( $( this ) );
    })
  },

  play: function () {
    var self = this;

    this.intId = setInterval( function nextSlide() {
      self.next();
    }, this.options.interval );
  },

  stop: function () {
    clearInterval( this.intId );
  },

  next: function () {
    this.tabGroup.$el
    var $active = null;
    this.tabGroup.$el.each( function () {
      if ( $( this ).hasClass( 'active' ) ) {
        $active = $( this );
        return;
      }
    });

    var $next = $active.next();
    if ( $next.length ) {
      this.tabGroup._handleActiveEvent( $next );
    } else {
      this.tabGroup._handleActiveEvent( $active.parent().find( ':first' ) );
    }
  }
});
