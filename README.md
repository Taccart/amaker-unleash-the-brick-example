
# Load demo code
Using this project as base project for your participation:
1. open [makecode.microbit.org](https://makecode.microbit.org/) in your chrome/edge/chromium browser (Firefox is possible but does not allow direct upload of code from browser)
   [amaker-unleash-the-brick-example](https://github.com/Taccart/amaker-unleash-the-brick-example)
   ![1 home page.png](images/1%20home%20page.png)
   click on import button
2. Choose import URL in the import screen ![2 import screen.png](images/2%20import%20screen.png)
3. Set [https://github.com/Taccart/amaker-unleash-the-brick-example](https://github.com/Taccart/amaker-unleash-the-brick-example) as URL to import
   ![3 import repo.png](images/3%20import%20repo.png)
4. You should have pre-installed the amaker libraries:
   * [amaker-motor](https://github.com/Taccart/amaker-motor)
   * [UnleashTheBricks](https://github.com/Taccart/amaker-unleash-the-bricks-lib)
   * [HuskyLens](https://github.com/DFRobot/pxt-DFRobot_HuskyLens)
   ![4 ready to use.png](images/4%20ready%20to%20use.png)

# Pre-loaded extensions:
## [UnleashTheBricks](https://github.com/Taccart/amaker-unleash-the-bricks-lib)
Extension dedicated to Unleash The Bricks tournament : it handles the communication with controller.
You have to add your own code in the given events (start / stop / danger ).
* [amaker-motor](https://github.com/Taccart/amaker-motor)
This extension gives an easy way to control your continuous servo motors or positional servo motors.
The servo number corresponds to the connector where the servo is plugged on.
* [HuskyLens](https://github.com/DFRobot/pxt-DFRobot_HuskyLens)
This extension handles interactions between your micro:bit and the Huskylens module.
Check [Overview of module](https://wiki.dfrobot.com/HUSKYLENS_V1.0_SKU_SEN0305_SEN0336)
and [pxt-DFRobot_HuskyLens](https://github.com/DFRobot/pxt-DFRobot_HuskyLens?tab=readme-ov-file)
# Using MakeCode
## Add & remove extension
Libraries are called `extensions`
**You shall save your code before managing extension**
sometimes a buggy library can block your code to load.
### Add extension
1.open `extensions` via top button
![extension1.png](images/extension1.png)
of by micro:bit code button
![extension2.png](images/extension2.png)
2.then provide the github repo (for private repos),
![extension by url.png](images/extension%20by%20url.png)
or by name (for libraries integrated to microsoft pxt.)
![extension by name.png](images/extension%20by%20name.png)
### Remove extension, changing its version
To manage versions and deletion of extension you have to remove it from pxt.json:
switch to code view (python or javascript)![pxt 0.png](images/pxt%200.png)
click on pxt.json in files, pass the connection screen ![pxt1.png](images/pxt1.png)
and edit the `dependencies` (remove line or change defined version.) ![pxt2.png](images/pxt2.png)
edit

## Save/Load your code to/from your own github repo
### Load from your repo
Click on the import button (see above) and choose Your GitHub Repo
![ghl1.png](images/ghl1.png)
Sign in
![ghl2.png](images/ghl2.png)
Choose the repo be imported (or create one)
![ghl3.png](images/ghl3.png)

### Save to your repo
Sign in GitHub
![ghs1.png](images/ghs1.png)
![ghs2.png](images/ghs2.png)
Sign in confirmed
![ghs3.png](images/ghs3.png)
Use the GitHub send button
![ghs4.png](images/ghs4.png)