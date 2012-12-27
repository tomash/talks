!SLIDE

# the original idea:
### 1. mainstream music = shit
### 2. we want to promote and sell music of independent artists
### ...3. but we also consider labels obsolete and dying


!SLIDE

### one sip of beer later
## "Let's take HumbleBundle's model of selling indie games and 'port it' to independent music"


!SLIDE

# MVP
## **sell music** on **the internet**: we need **music** and **an application for selling**


!SLIDE code

    commit 9104df332c5f54bee6e7f96dcc5d961ee668edaf
    Author: Tomasz Stachewicz <tomekrs@o2.pl>
    Date:   Tue May 15 15:27:38 2012 +0200

      turn off http_auth. transform and roll out.


!SLIDE code

    $ rake stats
    +----------------------+-------+-------+
    | Name                 | Lines |   LOC |
    +----------------------+-------+-------+
    | Controllers          |   109 |    90 |
    | Helpers              |    21 |    17 |
    | Models               |   180 |   138 |
    | Libraries            |     0 |     0 |
    | Integration tests    |     0 |     0 |
    | Functional tests     |    59 |    43 |
    | Unit tests           |    42 |    18 |
    +----------------------+-------+-------+
    | Total                |   411 |   306 |
    +----------------------+-------+-------+
      Code LOC: 245     Test LOC: 61     
      Code to Test Ratio: 1:0.2


!SLIDE

# That's 245 total lines of code.
### ...how?


!SLIDE bullets incremental

# outsource **ALL THE RESPONSIBILITES**

* payment processing: PayPal
* hosting files: Amazon S3
* sending emails: SendGrid
* content management: rails_admin


!SLIDE

# Conclusion?
## Build a startup when you get the complete idea.
## It's never been easier.
