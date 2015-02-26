# When you should not write tests.

### Tomasz Stachewicz

@_tomash

---

### Why do we write tests?

---

### Bad tests are worse than no tests.

---

They give a false sense of security,

while lack of tests is a screaming call-to-action.

---

Instead of preventing regressions,
bad tests will make regressions creep up in qa/production
even more often than untested code.

("We have tests for it so we don't need to click.")

---

## Bad Reasons:

(in order of importance)

---

### 1. You don't know how given code should work.

---

Popular "if you don't know how to implement it, write test cases for it" meme.

---

Result: ugly, bad-written code which needs refactoring before it was even created, with lots of tests for edge cases that result from bad, un-considered code in the first place.

---

### Solution: think.

If you don't have an idea, think more: read, talk to people, go for a walk.

"First solve the problem, then write the code."

---

### 2. You don't know when this test would fail.

---

Purpose of tests: ensure code works as expected, prevent regressions.

---

Purpose is defeated if you don't know how expectations would be missed or what kind of regression could it prevent.

"Fails only if method is removed" is not a good reason to keep the test.

---

### Solution: think.

If a test can't fail in reasonable scenarios, don't write it.

---

### 3. Testing what's already tested (in the library or framework).

---

Frequent offender: application tests for simple `validates` calls.

---

### Solution: see 2.

don't write test that won't fail.

---

### 4. You understand the code but have hard time writing tests for it.

---

Except for environment setup difficulties, complicated tests are a symptom of complicated code.

See: Object Orgy -- an antipattern (violation of Law of Demeter).

---

### Solution: write an acceptance test

...covering this class from a high level and refactor the hell out of it.

---

### 5. Test is copypasted.

---

Don't. Just don't.

Duplication indicates either shitty, repeated code or shitty, repeated tests. Often both.

---

### Ending remarks.

Tests are still code: they are a cost to develop and cost to maintain.

Make them worth the cost.

---

### That's all, folks!

What are the bad reasons you know?

---

(...)
