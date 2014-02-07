Thesis:

There's a better way to do reusable JS.

Main points:

- Don't use JS to edit CSS properties - apply/remove classes
  - show code sample of using jquery's .css versus add/remove class

- CSS animations over jquery animate
  - what does that mean for animation? depends on your platform
  - I recommend css transitions/animations - more performant on mobile
  - code sample jquery's .animate versus add class, event binding, remove class

- Write JS components in a way that they are as structure/style agnostic as possible
  - options - make selectors for nested pieces configurable

- Train yourself to notice UI patterns to make useful abstractions
  - practice U.I. patterns
  - show code examples of useful abstractions

Javascript components:

- Loads and loads of options
  - selectors, highest level of configurability

- event-driven architecture allows for decoupling/communication
  - event names are not configurable - they are namespaced and specific
  - binding/triggering should be baked into your components (thanks jquery)
