import { API_URL } from "../config/constants";
import { useState } from "react";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Divider, InputNumber, Button, Upload, Input, message } from "antd";
import "./UploadPage.css";
const UploadPage = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const navi = useNavigate();
    const onFinish = (values) => {
        axios
        .post(`${API_URL}/products`,{
            name:values.name,
            description:values.description,
            seller:values.seller,
            price:parseInt(values.price), //parseInt : 숫자를 정수로 바꿔주는 함수
            imageUrl:imageUrl,
        })
        .then((result)=>{
            navi('/',{replace:true})}
        ).catch(()=>{
            message.error('상품 등록에 오류가 있습니다.');
        })
    };
    const onChangeImage = (info) => {
        if (info.file.status === "uploading") {
            return;
        }
        if (info.file.status === "done") {
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            setImageUrl(imageUrl);
        }
        //이미지가 바뀔때 실행하는 함수
    }
    //   onFinish 는 form이 제출이 되면 값을 가질 함수
    return (
        <div id="body">
            <div id="upload-container">
                <Form name="uploadForm" onFinish={onFinish}>
                    <Form.Item name="upload">
                        <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage} >
                            {imageUrl ? (
                                <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
                            ) : (
                                <div id="upload-img-placeholder">
                                    <img src="/images/icons/camera.png" />
                                    <span>상품 이미지를 업로드 해주세요</span>
                                </div>

                            )}
                        </Upload>
                    </Form.Item>
                    {/* Divider : hr 같은 역할 form 태그 사이의 구분이 필요하다 */}
                    <Divider />
                    <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: '상품명은 필수 입력 사항입니다.' }]}>
                        <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large"></Input>
                    </Form.Item>
                    <Form.Item label={<span className="upload-label">판매자명</span>} name="product-seller" rules={[{ required: true, message: '판매자는 필수 입력 사항입니다.' }]}>
                        <Input className="upload-name" placeholder="판매자를 입력해주세요" size="large"></Input>
                    </Form.Item>
                    <Form.Item label={<span className="upload-label">판매가</span>} name="product-price" rules={[{ required: true, message: '판매가는 필수 입력 사항입니다.' }]}>
                        <InputNumber className="upload-name" defaultValue={0} min={0} size="large"></InputNumber>
                    </Form.Item>
                    <Form.Item label={<span className="upload-label">상품설명</span>} name="product-desc" rules={[{ required: true, message: '상품설명는 필수 입력 사항입니다.' }]}>
                        <Input.TextArea className="upload-name" placeholder="상품 설명을 입력하세요" showCount maxLength={300} />
                    </Form.Item>
                    <Divider />
                    <Form.Item>
                        {/* htmlType="submit" 가 중요 데이터를 전송하게 해줌 */}
                        <Button id="submit-button" size="large" htmlType="submit">상품등록하기</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default UploadPage;