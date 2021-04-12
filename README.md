# react-native-randomness

[![GitHub license](https://img.shields.io/github/license/eugenehp/react-native-randomness.svg?color=blue&style=for-the-badge)](./LICENSE)
[![npm](https://img.shields.io/npm/v/react-native-randomness.svg?color=green&style=for-the-badge)](https://www.npmjs.com/package/react-native-randomness)
[![npm downloads](https://img.shields.io/npm/dw/react-native-randomness.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-randomness?minimal=true)
[![total npm downloads](https://img.shields.io/npm/dt/react-native-randomness.svg?label=total%20npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-randomness?minimal=true)
[![GitHub watchers](https://img.shields.io/github/watchers/eugenehp/react-native-randomness.svg?style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/watchers)
[![GitHub stars](https://img.shields.io/github/stars/eugenehp/react-native-randomness.svg?label=GitHub%20stars&style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/eugenehp/react-native-randomness.svg?style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/network/members)
[![open bugs](https://img.shields.io/github/issues-raw/eugenehp/react-native-randomness/bug.svg?color=d73a4a&label=open%20bugs&style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Abug)
[![total open issues](https://img.shields.io/github/issues-raw/eugenehp/react-native-randomness.svg?label=total%20open%20issues&style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/eugenehp/react-native-randomness.svg?style=for-the-badge)](https://github.com/eugenehp/react-native-randomness/pulls)

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

## Sponsorship

Thank you to our sponsors:

[<img width="300px" src="https://user-images.githubusercontent.com/1857263/114124204-c4e1eb80-98a8-11eb-80ab-64683c24bbc5.png" alt="Reactive Lions™" target="_blank">](https://www.reactivelions.com)

## License

[MIT](./LICENSE)

Copyright (c) 2021 Eugene Hauptmann
