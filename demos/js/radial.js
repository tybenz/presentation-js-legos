/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

(function () {

    var RadialMenu = Lego.extend({
        defaultOptions: {
            optionSelector: '.radial-menu-options a',
            panelSelector: '.radial-menu-panel',
            settingsPanelSelector: '.radial-menu-setting',
            selectorSelector: '.radial-menu-selector',
            optionsCount: 0,
            initialOption: 0,
        },

        init: function ( el, options ) {
            this._super( el, options );

            var self = this,
                opts = this.options,
                $el = this.$el,
                $opts = $el.find( opts.optionSelector );

            // set up tabs
            var tabGroup = new Lego.RadioGroup( $opts ),
                panels = new Lego.PanelGroup( $el.find( opts.panelSelector ), {
                    tabGroups: [ tabGroup ]
                }),
                settingsPanels = new Lego.PanelGroup( $el.find( opts.settingsPanelSelector ), {
                    tabGroups: [ tabGroup ]
                });

            this.$selector = $( opts.selectorSelector );

            //set up angle info
            this.arc = 360 / opts.optionsCount;
            this.angleOffset = this.arc / 2;
            this.angles = [];
            for ( var i = 0; i < opts.optionsCount; i++ ) {
                this.angles.push( this.arc * i );
            }
            this.lastAngle = this.angles[ opts.initialOption ];
            this.setAngle( this.lastAngle );

            // set up animation of selector on hover and scroll
            $opts.on( 'mouseover', function followMouse( evt ) {
                self._handleMouseover( evt );
            });
        },

        _handleMouseover: function ( evt ) {
            var opts = this.options,
                $el = this.$el,
                $opts = $el.find( opts.optionSelector ),
                $option = $( evt.currentTarget ),
                index = $opts.index( $option ),
                newAngle = this.angles[ index ],
                lastAngle = this.inRange( this.lastAngle ),
                distance = Math.abs( newAngle - lastAngle ),
                underDistance = Math.abs( newAngle - 360 - lastAngle ),
                overDistance = Math.abs( newAngle + 360 - lastAngle ),
                minDistance = Math.min( distance, underDistance, overDistance );

            if ( underDistance == minDistance ) {
                newAngle = this.lastAngle + ( newAngle - 360 ) - lastAngle;
            } else if ( overDistance == minDistance ) {
                newAngle = this.lastAngle + ( newAngle + 360 ) - lastAngle;
            } else {
                newAngle = this.lastAngle + newAngle - lastAngle;
            }

            this.lastAngle = newAngle;

            this.setAngle( newAngle );
        },

        inRange: function ( angle ) {
            if ( angle < 0 ) {
                while ( angle < 0 ) angle += 360;
            } else if ( angle >= 360 ) {
                while ( angle >= 360 ) angle -= 360;
            }

            return angle;
        },

        setAngle: function ( angle ) {
            var self = this;

            angle += this.angleOffset;

            this.$selector.css({
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                '-moz-transform': 'rotate(' + angle + 'deg)',
                '-ms-transform': 'rotate(' + angle + 'deg)',
                '-o-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)'
            });
        }
    });

    Lego.RadialMenu = RadialMenu;

})();
