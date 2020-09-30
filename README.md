# BackTrackCarrierDesignation

  ReactJS / ASP.NET Core : Dashboard for displaying live sorting instructions for carriers in the paint line.
  
  As a carrier (cart that carries painted parts through the paint line conveyor) passes the RFID reader, the RFID tag is read and inserted into SQL. 
  This program gathers data about each carrier from SQL, then determines whether the carrier should be sent to Repair, Cleaning, or Storage. 
  It then displays a React-Bootstrap Card (in Home.js) displaying instructions/information about each carrier so that workers can see what to do with each carrier.
  
![image](https://user-images.githubusercontent.com/32852124/94740299-690a3900-0340-11eb-87a0-358796ba7429.png)

# Application Structure
## Back-end:
![image](https://user-images.githubusercontent.com/32852124/94743601-a624fa00-0345-11eb-87c3-e854825b6fff.png)

## Front-end: 
![image](https://user-images.githubusercontent.com/32852124/94743847-0ae05480-0346-11eb-809a-5f3433977006.png)
