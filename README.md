# react-native-randomness

Secure generatation of random bytes using native functions in Kotlin and Objective-C.

## Example

<table>
<tr>
  <td>Example iOS application</td>
  <td>Example Android application</td>
</tr>
<tr>
  <td>
   <img width="524" alt="Screen Shot 2021-04-04 at 13 17 43" src="https://user-images.githubusercontent.com/1857263/113520483-3d167d00-9548-11eb-9caf-386d6bce6e8b.png">
  </td>
  <td>
   <img width="457" alt="Screen Shot 2021-04-04 at 13 04 14" src="https://user-images.githubusercontent.com/1857263/113520484-3d167d00-9548-11eb-87cc-5313c85260d0.png">
  </td>
</tr>
</table>

Check the source code [here](https://github.com/eugenehp/react-native-randomness/tree/main/example)

## Installation

```sh
npm install react-native-randomness
# link native dependencies
npx react-native link
```

## Usage

```js
import {random} from "react-native-randomness";

const result = await random(); // [68, 115, 41, 36, 85, 55, 167, 223, 122, 48, 124, 211, 162, 50, 7, 25]
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

Copyright (c) 2020 Eugene Hauptmann
