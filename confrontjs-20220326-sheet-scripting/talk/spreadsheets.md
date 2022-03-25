# Spreadsheets
## JavaScript, API
### ConfrontJS, 2022-03-26

Tomasz Stachewicz

---

<img src="images/owl_square.jpg" style="border:none; box-shadow:none; width:40%">

### @\_tomash
coding since 2005

---

<img src="images/rebased-to-shopify.png" style="border:none; box-shadow:none; width:80%">

### Previously: Founder, CEO @ Rebased

### Now: Senior Dev Manager @ Shopify

---

### Still an engineer!

<img src="images/still-an-engineer.png" style="border:none; box-shadow:none; width:80%">

---

## We are developers

### We like building stuff

<img src="images/ballmer1.gif" style="border:none; box-shadow:none; width:50%">

---

### But sometimes developing a whole application is an overkill.

<img src="images/hackathon.png" style="border:none; box-shadow:none; width:80%">

---

## That's why we have no-code and low-code

---

## But let's talk spreadsheets.

---

## Spreadsheets do the job™.

---

### "Any dedicated software
### must perform substantially better
### than Excel at given task".

(not mine, author unknown)

---

* familiar
* easy to use and adapt
* data <-> interface

---

## But not very interesting to developers

---

### What if we could script them with JS

---

### ... and talk with external API?

---

<img src="images/googlesheets1.png" alt="Google Sheets custom functions" style="border:none; box-shadow:none; width:100%">

--- 

<img src="images/googlescript-urlfetchapp.png" alt="Google Script UrlFetchApp" style="border:none; box-shadow:none; width:60%">

--- 

## Let's get to the action!

---

<video data-autoplay src="images/fetch-todos.mp4"></video>

---

### (that concludes the interesting part)

---

## How do we do that?

---

### Let's generate simplest possible API in MockAPI

--- 


![Todos MockApi](images/script1-todos-mockapi.png)
<!-- .element width="80%" -->

---

### ...write a little bit of code...

---

![Todos Google Script code](images/script1-todos-code.png)
<!-- .element width="100%" -->

---

### ...and fire it up

---

<video data-autoplay src="images/fetch-todos.mp4"></video>

---

### Real API is usually a bit more complex

---


![Toggl entries](images/toggl1.png)
<!-- .element width="100%" -->

---

<video data-autoplay src="images/fetch-toggl.mp4"></video>

---

### But not much more complex!

---

<img src="images/fetchtoggl2.png" alt="Google Script code" style="border:none; box-shadow:none; width:100%">

---

<img src="images/fetchtoggl3.png" alt="Google Script code" style="border:none; box-shadow:none; width:100%">

---

### Can I POST data from spreadsheet?

---

<img src="images/script3-tshirts-post-code.png" alt="Google Script code" style="border:none; box-shadow:none; width:100%">

---

Is GoogleScript *a* JavaScript?

![Well yes, but actually no](images/well_yes_but_actually_no.jpg)
<!-- .element width="100%" -->

---

Drawbacks and risks

* no automated tests
* vendor lock-in
* (but Office365)

---

## There's more!

* Google services (Gmail, Gmaps, Contacts...)
* JDBC (suggestion: don't)
* Spreadsheet charts 📊

---

# That's all, folks!

---