(function() {
    var initializing = false,
        fnTest = /xyz/.test(function(){xyz;})
            ? /\b_super\b/
            : /.*/;

    // base Class implementation (does nothing)
    this.Class = function(){};

    // Create new Class that inherits from this class
    Class.extend = function(prop) {
        // save this as superclass
        var _super = this.prototype;

        // instantiate a base class (but only create instance, dont run init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // copy properties over onto new prototype
        for( var name in prop ) {

            // check if we're overwriting existing function
            prototype[name]
                = typeof prop[name] == 'function'
                && typeof _super[name] == 'function'
                && fnTest.test( prop[name] )

                ? // function exists
                ( function(name, fn) {
                    return function() {
                        var tmp = this._super;

                        // add new ._super() that's is the same method
                        this._super = _super[name];

                        // the method only need to be bound temporarily,
                        // remove it when we're done executing
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;

                    }
                })( name, prop[name] )

                :
                prop[name];
        }

        // dummy class constructor
        function Class() {
            // All construction is done in init()
            if( !initializing && this.init ) {
                this.init.apply( this, arguments );
            }
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce constructor to be what we expect
        Class.prototype.constructor = Class;

        // make this class extendable
        Class.extend = arguments.callee;

        return Class;
    }
})();