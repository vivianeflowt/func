[pixy-func](README.md) / Exports

# pixy-func

## Table of contents

### Interfaces

- [PipeFunction](interfaces/PipeFunction.md)
- [PredicateComparator](interfaces/PredicateComparator.md)

### Type aliases

- [List](modules.md#list)

### Comparability Functions

- [collect](modules.md#collect)
- [ifElse](modules.md#ifelse)
- [ifThen](modules.md#ifthen)
- [isLike](modules.md#islike)

### Other Functions

- [limit](modules.md#limit)
- [occurrences](modules.md#occurrences)
- [paginate](modules.md#paginate)
- [pickFromList](modules.md#pickfromlist)
- [randomFromList](modules.md#randomfromlist)
- [renameKeys](modules.md#renamekeys)
- [shuffleList](modules.md#shufflelist)
- [uniqueByKey](modules.md#uniquebykey)
- [uniqueObject](modules.md#uniqueobject)

### String Functions

- [removeSpaces](modules.md#removespaces)
- [reverseStr](modules.md#reversestr)
- [splitByWord](modules.md#splitbyword)
- [toCamelCase](modules.md#tocamelcase)
- [unaccented](modules.md#unaccented)

## Type aliases

### List

Ƭ **List**<`T`\>: `ReadonlyArray`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types.ts:8](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/types.ts#L8)

## Comparability Functions

### collect

▸ **collect**(`str`, `previous`): `string`[]

Description placeholder

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `previous` | `string`[] |

#### Returns

`string`[]

#### Defined in

[lib/collect.ts:10](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/collect.ts#L10)

___

### ifElse

▸ **ifElse**<`T`\>(...`args`): (`a`: `any`) => (`b`: `any`) => (`predicade`: `T`) => `T`

Description placeholder

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`PredicateComparator`](interfaces/PredicateComparator.md)[] |

#### Returns

`fn`

▸ (`a`): (`b`: `any`) => (`predicade`: `T`) => `T`

Description placeholder

**`category`** Comparability

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

##### Returns

`fn`

▸ (`b`): (`predicade`: `T`) => `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `any` |

##### Returns

`fn`

▸ (`predicade`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicade` | `T` |

##### Returns

`T`

#### Defined in

[lib/if-else.ts:13](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/if-else.ts#L13)

___

### ifThen

▸ **ifThen**<`T`, `R`\>(...`args`): (`a`: `any`) => (`predicade`: `T`) => `T`

Description placeholder

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`PredicateComparator`](interfaces/PredicateComparator.md)[] |

#### Returns

`fn`

▸ (`a`): (`predicade`: `T`) => `T`

Description placeholder

**`category`** Comparability

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

##### Returns

`fn`

▸ (`predicade`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicade` | `T` |

##### Returns

`T`

#### Defined in

[lib/if-then.ts:13](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/if-then.ts#L13)

___

### isLike

▸ **isLike**<`A`, `B`\>(`a`): (`b`: `B`) => `boolean`

Description placeholder

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`b`): `boolean`

Description placeholder

**`category`** Comparability

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |

##### Returns

`boolean`

#### Defined in

[lib/is-like.ts:11](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/is-like.ts#L11)

___

## Other Functions

### limit

▸ **limit**<`T`\>(`count`): (`list`: [`List`](modules.md#list)<`T`\>) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`fn`

▸ (`list`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

##### Returns

`T`[]

#### Defined in

[lib/limit.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/limit.ts#L5)

___

### occurrences

▸ **occurrences**<`T`\>(`value`): (`list`: [`List`](modules.md#list)<`T`\>) => `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`fn`

▸ (`list`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

##### Returns

`number`

#### Defined in

[lib/occurrences.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/occurrences.ts#L5)

___

### paginate

▸ **paginate**<`T`\>(`size`): (`offset`: `number`) => (`list`: [`List`](modules.md#list)<`T`\>) => `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`fn`

▸ (`offset`): (`list`: [`List`](modules.md#list)<`T`\>) => `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

##### Returns

`fn`

▸ (`list`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

##### Returns

`any`

#### Defined in

[lib/paginate.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/paginate.ts#L5)

___

### pickFromList

▸ **pickFromList**<`T`\>(`list`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

#### Returns

`T`

#### Defined in

[lib/pick-from-list.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/pick-from-list.ts#L5)

___

### randomFromList

▸ **randomFromList**<`T`\>(`list`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

#### Returns

`T`

#### Defined in

[lib/random-from-list.ts:3](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/random-from-list.ts#L3)

___

### renameKeys

▸ **renameKeys**(...`from`): (...`to`: `string`[]) => (`obj`: `Object`) => {}

#### Parameters

| Name | Type |
| :------ | :------ |
| `...from` | `string`[] |

#### Returns

`fn`

▸ (...`to`): (`obj`: `Object`) => {}

##### Parameters

| Name | Type |
| :------ | :------ |
| `...to` | `string`[] |

##### Returns

`fn`

▸ (`obj`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

##### Returns

`Object`

#### Defined in

[lib/rename-keys.ts:3](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/rename-keys.ts#L3)

___

### shuffleList

▸ **shuffleList**<`T`\>(`list`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

#### Returns

`T`[]

#### Defined in

[lib/shuffle-list.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/shuffle-list.ts#L5)

___

### uniqueByKey

▸ **uniqueByKey**<`T`\>(`predicate`): (`list`: [`List`](modules.md#list)<`T`\>) => `any`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `string` |

#### Returns

`fn`

▸ (`list`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

##### Returns

`any`[]

#### Defined in

[lib/unique-by-key.ts:5](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/unique-by-key.ts#L5)

___

### uniqueObject

▸ **uniqueObject**<`T`\>(`list`): `any`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`List`](modules.md#list)<`T`\> |

#### Returns

`any`[]

#### Defined in

[lib/unique-object.ts:3](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/unique-object.ts#L3)

___

## String Functions

### removeSpaces

▸ **removeSpaces**(`str`): `string`

Remove blank spaces from string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[lib/remove-spaces.ts:7](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/remove-spaces.ts#L7)

___

### reverseStr

▸ **reverseStr**(`str`): `string`

Reverse string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[lib/reverse-str.ts:9](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/reverse-str.ts#L9)

___

### splitByWord

▸ **splitByWord**(`str`): `string`[]

Split each word of the string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

#### Defined in

[lib/split-by-word.ts:9](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/split-by-word.ts#L9)

___

### toCamelCase

▸ **toCamelCase**(`str`): `string`

Formats the string in camelcase style the string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[lib/to-camel-case.ts:9](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/to-camel-case.ts#L9)

___

### unaccented

▸ **unaccented**(`str`): `string`

Convert accented letters to unaccented letters

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[lib/unaccented.ts:7](https://github.com/vivianeflowt/pixy-fn/blob/5490830/src/lib/unaccented.ts#L7)
