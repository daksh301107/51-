# Product

<!-- impeccable:product-schema 1 -->

Scope: the website in `dic-site/`. The repo root also holds an unrelated origami page, which this file does not describe.

## Platform

web

## Users
Primary: industry and clinical partners deciding whether to license, co-develop or trial a medical device or other technology with the centre (confirmed by the owner). Other audiences the page serves, in no confirmed priority order: students and interns (workshops, summer training, internships), funders and the ministry (output and impact), and researchers browsing projects and patents. The contact form offers four topics: research collaboration, industry partnership or licensing, clinical partnership, internship.

## Product Purpose
The public website of the Design Innovation Centre (DIC), UIET, Panjab University, Chandigarh. It presents the centre, its four research themes, how an idea becomes a product, a library of 47 projects, 13 patents, events and training, and the people involved, and it lets a visitor start a conversation with the centre by email. Success is a qualified partner enquiry.

## Positioning
Medical devices, AI systems, energy harvesting and transparent ceramics designed at a university and tested with Chandigarh's hospitals (PGIMER, GMCH-32), inside the Ministry of Education's National Design Innovation Network (hub and spoke with CSIR-CSIO, PEC and HSJIDS). Wording comes from the site's own copy; the owner has not rewritten it.

## Operating Context
Static HTML, CSS and JavaScript with no build step and no backend. Staff maintain the project and patent content by hand-editing `dic-site/assets/js/data.js` (confirmed constraint). The contact form opens the visitor's email client (`mailto:`); nothing is sent to a server. The page declares `https://dicpu.in/` as its canonical address; hosting and response headers are not known. A data and consistency test lives at `dic-site/tests/data.test.js`.

## Capabilities and Constraints
- Content lives in `data.js` (47 projects across four themes, 13 patents with status Granted, Published, Filed or Prototype). Counts shown on the page are computed from that file.
- Search and theme filters on projects; detail drawers for projects and patents; a photo lightbox.
- Contact recipients: general enquiries and a separate address for medical devices (MDaRT). Both appear on the page.
- Undecided: whether two patents without dates (Tactile Oral Health Education Device, Piezoelectric Shoes) will get filing or grant years; deployment target and hosting.

## Brand Commitments
The name "Design Innovation Centre, Panjab University", the partner names and logos as they appear on the page, and "Ministry of Education, NDIN, est. 2015". The owner has not made anything beyond that explicitly binding.

## Evidence on Hand
- Confirmed by the owner as shown on the page and safe to repeat: 5,621 students in DIC courses, 130 publications, 110 workshops, hackathons and idea competitions, 30 new electives, 11 prototypes in clinical trials, 12 royalty LOIs and MoUs with industry, 16 start-ups supported (10) and technology transfers (6).
- Derived from `data.js`: 47 projects, 8 granted patents, 12 filed, published or granted patents, 4 research themes.
- Photos of the July 2025 workshop and events, staff portraits, project and patent images, partner logos (in `dic-site/assets/img/`); 36 project images are hosted on Cloudinary.
- Absent, and not to be invented: testimonials, case studies, press coverage, pricing, licensing terms, named industry customers.

## Product Principles
1. Lead with proof a partner can weigh: clinical trials, patents, named hospital and research partners, real prototypes.
2. Every number is traceable to `data.js` or to the confirmed list above; new claims need owner confirmation first.
3. The content stays hand-editable by centre staff; do not add machinery they cannot maintain.
4. One clear way to start a conversation, routed by what the visitor wants (research, licensing, clinical partnership, internship).
