/**
 * Unit test for the PropTypes.any validator
 */
import EmberObject from '@ember/object'

import {afterEach, beforeEach, describe} from 'mocha'
import sinon from 'sinon'

import {
  itSupportsUpdatableOption,
  itValidatesTheProperty,
  spyOnValidateMethods
} from 'dummy/tests/helpers/validator'

import PropTypesMixin, {PropTypes} from 'ember-prop-types/mixins/prop-types'

const requiredDef = {
  required: true,
  type: 'any'
}

const notRequiredDef = {
  required: false,
  type: 'any'
}

describe('Unit / validator / PropTypes.any()', function () {
  const ctx = {propertyName: 'bar'}
  let sandbox, Foo

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    spyOnValidateMethods(sandbox)
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('when required option not present', function () {
    beforeEach(function () {
      ctx.def = notRequiredDef
      Foo = EmberObject.extend(PropTypesMixin, {
        propTypes: {
          bar: PropTypes.any()
        }
      })
    })

    describe('when initialized with array value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: []})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with boolean value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: true})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with function value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar () {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with null value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: null})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with number value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 1})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with object value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with string value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 'test'})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized without value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create()
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })
  })

  describe('when required', function () {
    beforeEach(function () {
      ctx.def = requiredDef

      Foo = EmberObject.extend(PropTypesMixin, {
        propTypes: {
          bar: PropTypes.any({required: true})
        }
      })
    })

    describe('when initialized with array value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: []})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with boolean value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: true})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with function value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar () {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with null value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: null})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with number value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 1})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with object value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with string value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 'test'})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized without value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create()
      })

      itValidatesTheProperty(ctx, false, 'Missing required property bar')

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })
  })

  describe('when not required', function () {
    beforeEach(function () {
      ctx.def = notRequiredDef
      Foo = EmberObject.extend(PropTypesMixin, {
        propTypes: {
          bar: PropTypes.any({required: false})
        }
      })
    })

    describe('when initialized with array value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: []})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with boolean value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: true})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with function value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar () {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with null value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: null})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with number value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 1})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with object value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: {}})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized with string value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create({bar: 'test'})
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })

    describe('when initialized without value', function () {
      beforeEach(function () {
        ctx.instance = Foo.create()
      })

      itValidatesTheProperty(ctx, false)

      describe('when updated with array value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', [])
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with boolean value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', false)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with null value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', null)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with number value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 2)
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with object value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', {})
        })

        itValidatesTheProperty(ctx, false)
      })

      describe('when updated with string value', function () {
        beforeEach(function () {
          console.warn.reset()
          ctx.instance.set('bar', 'baz')
        })

        itValidatesTheProperty(ctx, false)
      })
    })
  })

  itSupportsUpdatableOption('any', 1, 'test')
})
