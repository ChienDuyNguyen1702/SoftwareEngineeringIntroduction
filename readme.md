#  Hello các bạn
mình sẽ hướng dẫn luồng xử lý cho từng cá nhân, sau đây là nội dung hướng dẫn cũng như các yêu cầu về project
1. [Điều kiện để chạy được project](#requirement)
2. [Luồng git](#gitflow)
3. [Cách chạy project](#run)
4. [sau khi fix](#fixed )


## 1. Điều kiện để chạy được project<div id='requirement'></div>
đầu tiên phải cần tải docker về máy để chạy được thử project<br>
Tải docker thì mọi người có thể xem ở bất cứ đâu
## 2. Luồng git<div id='gitflow'></div>
- Thực hiện trên cửa sổ terminal, tại folder nào đó cũng được, miễn là đừng loạn :v
- Thực hiện câu lệnh git clone từ main của prj theo nhánh K64 repo của Chiến về<br>
`git clone https://github.com/ChienDuyNguyen1702/SoftwareEngineeringIntroduction.git --branch K64 --single-branch`
- tạo nhánh riêng cho mình ở máy của cá nhân, và để ý luôn thực hiện trên nhánh ấy của mình<br>
`git checkout -b <tên nhánh>`
tên nhánh yêu cầu Tên_sửa_phần_nào, Eng Vne Jpn đều được,
- Chạy project [Cách chạy project](#run)
- <b>Thực hiện công việc cần làm của mình</b>, những phần không phải của mình thì đừng thay đổi gì nhé
- Sau khi chỉnh sửa thông tin, chỉ cần CTRL+S để save lại rồi ra browser F5 hay refresh lại là được
- Sau khi hoàn thành công việc của mình, thực hiện add và commit<br>
`git add . `<br>
`git commit -m "Tên của commit"`
- Yêu cầu tên commit phải miêu tả rõ được việc đã làm
- Sau đó push lên repo, sẽ có 2 trường hợp
  - Lần đầu push thì dùng câu lệnh thêm `-u` như dưới<br>
    `git push -u origin <tên nhánh>`
  - những lần khác chỉ cần `git push`
- Để ý xem nhóm trưởng nhắc pull code như nào, nếu có nhắc pull, trước tiên cần check xem nhánh ở máy tính cá nhân mình có phải nhánh của mình (để tránh trường hợp máy cá nhân đang ở nhánh main rồi pull) không, rồi thực hiện: `git pull origin main`
## 3. Cách chạy project <div id='run'></div>
- sau khi git clone về thì phải truy cập vào folder bằng lệnh `cd SoftwareEngineeringIntroduction`, còn git pull thì thôi ko cần truy cập `cd` nữa
- chạy tiếp `docker compose build`, đợi progress xong
- chạy tiếp `docker compose up`, xem chỗ progress ấy xem có lỗi gì ko
  - nếu không có lỗi, thấy server listen port 8080 thì là xong, truy cập vào localhost ở browser để check
  - nếu không có lỗi, chụp lỗi gửi nhóm trưởng
## 4. Last thing <div id='fixed'></div>
- sau khi push, nhớ lên link git của mình để xem tạo branch chưa, có commit mới chưa, rồi liên hệ vào nhóm với nhóm trưởng để cập nhật tiến độ công việc
