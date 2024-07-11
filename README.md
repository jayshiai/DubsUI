<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jayshiai/dubsui">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/jayshiai/dubsui"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jayshiai/dubsui">View Demo</a>
    ·
    <a href="https://github.com/jayshiai/dubsui/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/jayshiai/dubsui/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![dubsui][product-screenshot]](https://ui.3dubs.in)

**dubsui** is a minimalistic component built on top of RadixUI and styled with TailwindCSS.

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TailwindCSS][Tailwind]][Tailwind-url]
- [![Storybook][Storybook]][Storybook-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Install NPM package
   ```sh
   npm install dubsui
   ```
2. Start using the components! Its that easy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

### Usage

```jsx
import { Accordion } from "dubsui";
export const Accord = () => {
  const data = [
    {
      title: "Some things are meant to be",
      content: "To be or not to be",
    },
    {
      title: "Where are you now",
      content: "I'm in the middle of nowhere",
    },
    {
      title: "What is your name",
      content: "My name is nobody",
    },
    {
      title: "How are you",
      content: "I'm fine",
    },
  ];
  return <Accordion items={data} />;
};
```

_For more examples, please refer to the [Documentation](ui.3dubs.in)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create basic structure
- [x] Add starting components
- [x] Add Storybook
- [x] Add basic Stories
- [ ] Write better Stories
- [ ] Add unit tests. ( Jest or Vitest mayber)
- [ ] Move from Tailwind to CSS modules

See the [open issues](https://github.com/jayshiai/dubsui/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jayvardhan Patil - [@jayshiai](https://www.reddit.com/user/jayshiai/) - jayshiai7811@gmail.com

Project Link: [https://github.com/jayshiai/dubsui](https://github.com/jayshiai/dubsui)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Radix UI](https://www.radix-ui.com/)
- [shadcn](https://shadcn.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jayshiai/dubsui?style=for-the-badge
[contributors-url]: https://github.com/jayshiai/dubsui/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jayshiai/dubsui?style=for-the-badge
[forks-url]: https://github.com/jayshiai/dubsui/network/members
[stars-shield]: https://img.shields.io/github/stars/jayshiai/dubsui.svg?style=for-the-badge
[stars-url]: https://github.com/jayshiai/dubsui/stargazers
[issues-shield]: https://img.shields.io/github/issues/jayshiai/dubsui.svg?style=for-the-badge
[issues-url]: https://github.com/jayshiai/dubsui/issues
[license-shield]: https://img.shields.io/github/license/jayshiai/dubsui.svg?style=for-the-badge
[license-url]: https://github.com/jayshiai/dubsui/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jayvardhan-patil-419b9926b/
[product-screenshot]: public/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[Tailwind-url]: https://tailwindcss.com/
[Storybook]: https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=FF4785
[Storybook-url]: https://storybook.js.org/
