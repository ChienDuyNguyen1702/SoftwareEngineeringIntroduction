<!-- # Covid-19 Management System

## _Hệ thống quản lý dịch tễ Covid-19 trên địa bàn by Covid Hub Team_
  [![NPM Version][npm-image]][npm-url]

✨ [Link Demo](https://covid-19-management-app.herokuapp.com/) ✨


COVID19 ANTI HUB là một nhóm được thành lập ngay sau khi thầy Nhật Hoá học phần Công Nghệ Phần Mềm giao giao bài tập lớn, mục tiêu nhóm là xây dựng một web app quản lý dịch tễ covid. Nhóm đã trải qua rất nhiều khủng hoảng về tinh thần, suy nghĩ về cuộc đời, về môn học nặng 2 tín này, nhưng thật may mắn là mình đang viết dòng này sau khi đã code xong 80% cái web và ngày mai là ngày nộp báo cáo. Thôi viết thế đủ kín khung này rồi, mọi người nhớ chú ý và tự bảo vệ mình trong đợt dịch nha  ༼ つ ◕_◕ ༽つ❤ 

## Features

- Quản lý nhân khẩu, hộ khẩu có trong địa bàn 👌.
- Quản lý khai báo của nhân khẩu trên địa bàn 👌.
- Quản lý tình hình cách ly, xét nghiệm của nhân khẩu trên địa bàn 👌.
- Thống kê dữ liệu khai báo, cách ly 👌.
- Cập nhật realtime số liệu, đồ thị 🎉.
- Cung cấp API đầy đủ 💡.

## Future features
- Cải thiện UX 🎨.
- Responsive với các route thêm mới, cập nhật.
- Tăng bảo mật, phân quyền.

## Tech

Covid-19 Management System uses a number of open source projects to work properly:

- [Bootstrap] - great UI boilerplate for modern web apps.
- [node.js] - for the backend.
- [Express] - fast node.js network app framework.
- [MongoDB] - document database.
- [pug] - template engine.
- [socketio] - real-time, bidirectional and event-based communication.

And of course Covid-19 Management System itself is open source with a [public repository][cms]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.
Clone project and ```cd /Covid-19-Management-System```.

Create new ```.env``` file.
```
MONGO_URL='your mongodb connector uri'
```
Save it and to the mooon ╰(*°▽°*)╯
```sh
npm run dev
```
Open any browser and type the following url.
```sh
localhost:3000
```
Ok goy done nha (❁´◡`❁)

## Contributors (aka CovidHub members)
- Nguyễn Ngọc Tuân 🤔
- Nguyễn Đăng Tuấn Anh 🥰
- Nguyễn Đức Tùng 😲
- Nguyễn Đồng Đức Anh 😎
- Nguyễn Huy Hoàn 😝
 ## License

  [MIT](LICENSE)

   [cms]: <https://github.com/zennomi/Covid-19-Management-System>
   [node.js]: <http://nodejs.org>
   [Bootstrap]: <https://getbootstrap.com/docs/5.0/getting-started/introduction/>
   [express]: <http://expressjs.com>
   [pug]: <https://pugjs.org/>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>


[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[MongoDB]: https://www.mongodb.com/
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[socketio]: https://socket.io/ -->



#  Hello các bạn
mình sẽ hướng dẫn luồng xử lý cho từng cá nhân, sau đây là nội dung hướng dẫn cũng như các yêu cầu về project
1. [Điều kiện để chạy được project](#requirement)
2. [Luồng git](#gitflow)
3. [sau khi fix](#fixed )


## 1. Điều kiện để chạy được project<div id='requirement'></div>
đầu tiên phải cần tải docker về máy để chạy được thử project
Tải docker thì mọi người có thể xem ở bất cứ đâu
## 2. Luồng git<div id='gitflow'></div>
- Sau khi tải docker, thực hiện câu lệnh git clone từ main của prj theo nhánh K64 repo của Chiến về
`git clone link --branch K64 --single-branch`
- tạo nhánh riêng cho mình ở máy của cá nhân
`git checkout -b <tên nhánh>`
tên nhánh yêu cầu Tên_sửa_phần_nào, Eng Vne Jpn đều được,
- <b>Thực hiện công việc cần làm của mình</b>
- Sau khi chỉnh sửa thông tin, chỉ cần CTRL+S để save lại rồi ra browser F5 hay refresh lại là được
- Sau khi hoàn thành công việc của mình, thực hiện add và commit
`git add . `
`git commit -m "Tên của commit"`

- Yêu cầu tên commit phải miêu tả rõ được việc đã làm
`git push -u origin <tên nhánh>`
## Third Example <div id='fixed'></div>
- sau khi push, nhớ lên link git của mình để xem tạo branch chưa, rồi liên hệ với Chiến để review qua