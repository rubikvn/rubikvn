## Yêu cầu

Tên website: rubikvn

Website cho cộng đồng Rubik tại Việt Nam, phục vụ chủ yếu cho các giải đấu WCA. Thiết kế ban đầu chỉ bao gồm chức năng quản lý/tham gia các giải đấu WCA thường niên. Người dùng trang web bao gồm: ban tổ chức, thí sinh tham gia giải đấu WCA, WCA delegate, và phụ huynh/người giám hộ của thí sinh.


## Tài khoản trên trang web

Do thông tin trên rubikvn cần thống nhất với các tài khoản cá nhân trên trang worldcubeassociation.org (WCA), các cá nhân muốn đăng ký cần sử dụng tài khoản WCA và đăng nhập qua hệ thống OAuth (trừ các trường hợp đặc biệt như webadmin hoặc btc)
- Đối với delegate hoặc thí sinh đã sở hữu tài khoản WCA, bước duy nhất cần thực hiện là trao quyền truy cập thông tin cho website rubikvn.
- Thí sinh chưa có tài khoản WCA cần tạo tài khoản mới ngay trên trang WCA, nhập các thông tin cơ bản như tên thật, ngày tháng năm sinh, địa chỉ email, và sau đó mới đến bước đăng nhập trên trang rubikvn.
- Phụ huynh/giám hộ muốn đăng ký giúp cho thí sinh là trẻ em, cần tạo tài khoản trên trang WCA sử dụng thông tin cá nhân của thí sinh. Phần email có thể sử dụng một địa chỉ thuộc quyền sở hữu của phụ huynh. Các bước còn lại tương tự như trên.
- Đối với các cá nhân, tập thể với tư cách ban tổ chức giải đấu WCA. Một tài khoản đặc biệt sẽ được cung cấp bởi web admin để quản lý giải đấu mà không cần tài khoản WCA.


### Web Admin

- Là người phát triển và quản lý toàn bộ website, mặc định là các thành viên trong nhóm rubikvn trên Github ở thời điểm hiện tại. Trong tương lai có thể bổ sung thêm các delegate, mod/admin cũ của diễn đàn.
- Web admin có khả năng tạo, khóa/mở khóa tài khoản (meta), thiết lập giải đấu. Hình thức đăng nhập của admin sẽ khác với các thành viên thường, và thông qua một url riêng (vd. /admin/login)

### WCA Delegate
- Là "cán bộ" của WCA, người chịu trách nhiệm theo dõi và quản lý các giải đấu chính thức của WCA. Mỗi giải đấu chính thức cần có sự có mặt của ít nhất 1 delegate (candidate delegate chưa được công nhận là delegate chính thức).
- Delegate có toàn quyền đối với giải đấu do mình chịu trách nhiệm, bao gồm tạo giải đấu mới, cập nhật thông tin giải đấu, hủy giải đấu, quản lý đơn đăng ký, quản lý thí sinh v.v
- Tài khoản delegate trên website được xác nhận bởi WCA (kiểm tra api/v0/me, cần xác nhận lại phần này)

### Thí sinh
- Là phần lớn người dùng của trang web, thí sinh bắt buộc phải có tài khoản trên trang WCA (www.worldcubeassociation.org)


### Ban tổ chức


## Giải đấu WCA
