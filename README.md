# Linkteam
โปรแกรมสำหรับ HR

สิ่งที่ต้องมีในการ Run Project
  1. nodejs
  2. xcode สำหรับ run simulator ios (version 13.4 recomment)
  3. android studio สำหรับ run simulator android
  4. yarn

วิธี Run Project
  เปิด Terminal เข้าไปที่อยู่ Folder xx/xx/Linkteam แล้วพิมพ์คำสั่งตามด้านล่าง
      npm install || ถ้าใช้ yarn ให้พิมพ์คำสั่ง yarn install เพื่อติดตั้ง nodemodule
  IOS
    เข้าไปที่อยู่ Folder ios --> xx/xx/Linkteam/ios แล้วพิมพ์คำสั่งตามด้านล่าง
      pod install
    กลับไปที่ folder หลัก Linkteam run คำสั่ง
      npm react-native run-ios || ถ้าใช้ yarn ให้พิมพ์คำสั่ง yarn react-native run-ios
    จะ run simulator พร้อม Debug ให้รอจนกว่าจะติดตั้งเสร็จเรียบร้อย
  
  Android
    เข้าไปที่อยู่ Folder ios --> xx/xx/Linkteam/android แล้วพิมพ์คำสั่งตามด้านล่าง
      ./gradlew clean
    กลับไปที่ folder หลัก Linkteam run คำสั่ง
      npm react-native run-android || ถ้าใช้ yarn ให้พิมพ์คำสั่ง yarn react-native run-android
    จะ run simulator พร้อม Debug ให้รอจนกว่าจะติดตั้งเสร็จเรียบร้อย

