# BackTrackCarrierDesignation

  ReactJS / ASP.NET Core : Dashboard for displaying live sorting instructions for carriers that were removed from the paint line.
  
  As a carrier (cart that carries painted parts through the paint line conveyor) is removed from the paint line, it passes an RFID reader which inserts the RFID tag into SQL. 
  This program gathers additional data about each carrier from SQL, then determines whether the carrier should be sent to Repair, Cleaning, or Storage. 
  It then displays a React-Bootstrap Card (in Home.js) displaying instructions informing carrier-maintenance technicians what to do with each carrier.
  This is a non-interactive, auto-updating display for the TV's in this part of the paint line.
![image](https://user-images.githubusercontent.com/32852124/94823346-c00c1e80-03d1-11eb-8474-2ff683512d53.png)

# Application Structure
## Back-end:
![image](https://user-images.githubusercontent.com/32852124/94743601-a624fa00-0345-11eb-87c3-e854825b6fff.png)

## Front-end: 
![image](https://user-images.githubusercontent.com/32852124/94743847-0ae05480-0346-11eb-809a-5f3433977006.png)
