# Animal Awareness Website — Report

## Project Overview

**Animal Awareness** is an educational website developed as part of the Secure Front-End Application module at the University of Technology, Mauritius (UTM). The site is designed to educate people about animals — covering proper pet care, different animal species, the importance of protecting endangered animals, and raising awareness about wildlife conservation.

**Live site:** [https://kushalt2509.github.io](https://kushalt2509.github.io)

---

## Purpose

The website serves the following educational goals:

- **Educate about pet care** — providing practical tips for responsible pet ownership (dogs, cats, rabbits, birds)
- **Teach about animal species** — classifying animals into mammals, reptiles, birds, fish, and amphibians with key characteristics and examples
- **Highlight endangered species** — raising awareness about critically endangered animals such as the Black Rhino, Hawksbill Sea Turtle, and Mauritius Olive White-eye
- **Promote wildlife conservation** — showcasing conservation success stories (Giant Panda, Pink Pigeon, Humpback Whale) and explaining threats like habitat loss, poaching, and climate change
- **Provide interesting facts** — fun and surprising facts about sloths, kangaroos, cheetahs, giraffes, octopuses, and dolphins
- **Raise awareness about wild animals** — both land (African Elephant, Giraffe, Lion) and aquatic (Dolphin, Orca, Great White Shark) species

---

## Site Structure

The website consists of 12 numbered sections, each in its own folder:

| #   | Section            | Folder                  | Description                                           |
| --- | ------------------ | ----------------------- | ----------------------------------------------------- |
| 1   | Home               | `1.Home/`               | Landing page with site intro, animal facts, and audio |
| 2   | About Us           | `2.About-Us/`           | Mission, values, and academic project info            |
| 3   | Animal Categories  | `3.Animal-Categories/`  | Mammals, reptiles, birds, fish, amphibians            |
| 4   | Endangered Species | `4.Endangered-Species/` | Profiles of critically endangered animals             |
| 5   | Wild Animals       | `5.Wild-Animals/`       | Land and aquatic wild animal profiles                 |
| 6   | Pets Section       | `6.Pets-Section/`       | Dogs, cats, rabbits, birds — basic care overview      |
| 7   | Animal Care Tips   | `7.Animal-Care-Tips/`   | Detailed care guides for each pet type                |
| 8   | Fun Facts          | `8.Fun-Facts/`          | Interesting animal facts with video content           |
| 9   | Gallery            | `9.Gallery/`            | Photo collection (placeholder)                        |
| 10  | Conservation       | `10.Conservation/`      | Conservation info, threats, and success stories       |
| 11  | Blog               | `11.Blog/`              | Blog placeholder (unused)                             |
| 12  | Contact            | `12.Contact/`           | Contact form and office details                       |

---

## Technologies Used

| Technology          | Usage                                                    |
| ------------------- | -------------------------------------------------------- |
| HTML5               | Page structure (13 HTML files)                           |
| CSS3                | Custom styling (`css/style.css`, ~460 lines)             |
| JavaScript (jQuery) | Hamburger menu toggle, submenu interaction (`script.js`) |
| Bootstrap 5.3.8     | Responsive grid layout and components                    |
| Font Awesome 6      | Icons (email, Facebook, Instagram, phone)                |

---

## Multimedia Assets

| Type   | Count    | Details                                                       |
| ------ | -------- | ------------------------------------------------------------- |
| Images | 41 files | `.webp`, `.jpg`, `.avif` — animals, conservation, pets        |
| Audio  | 1 file   | `naturebirdschirping.mp3` — forest birdsong on homepage       |
| Video  | 1 file   | `dolphinpufferfish.mp4` — dolphin behaviour on Fun Facts page |
| Icons  | 3 files  | Favicon and mini icons for site branding                      |
| Logos  | 2 files  | Custom Animal Awareness logo                                  |

---

## Key Features

- **Responsive design** using Bootstrap grid system
- **Hamburger navigation menu** with expandable submenu for Animal Categories
- **Audio player** on homepage for ambient nature sounds
- **Video embed** on Fun Facts page showing dolphin behaviour
- **Contact form** with name, email, and message fields
- **External resource links** to Britannica, WWF, Wikipedia, NOAA, National Geographic
- **Social media links** to Facebook, Instagram, and email contact

---

## Navigation Flow

Users can browse content through:

1. **Top navigation bar** — Home, About, Gallery, Contact (present on homepage)
2. **Floating hamburger menu** — available on all pages with links to:
   - Home, Pets, Categories (with submenu for Mammals, Reptiles, Birds, Fish, Amphibians), Care Tips, Fun Facts, Blog, Contact Us
3. **In-page buttons** — cross-linking between related content (e.g., Pets page links to detailed Care Tips)

---

## Security Considerations

As a Secure Front-End Application project, the website implements:

- Proper use of `<!DOCTYPE html>` and `<meta charset="UTF-8">` for document standards
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`)
- External resources loaded over HTTPS
- `preload="metadata"` on audio/video for bandwidth optimisation
- No inline JavaScript events — all scripting handled through external `script.js`

---

## Conclusion

Animal Awareness is a comprehensive educational website that fulfills its purpose of teaching visitors about animal care, species classification, endangered species, and conservation. With 12 content sections, 41 images, and multimedia (audio + video), it provides an engaging learning experience. The site is fully responsive, uses modern web technologies (Bootstrap 5, jQuery, Font Awesome), and follows semantic HTML best practices. It was developed as a student project for the Secure Front-End Application module at UTM.
