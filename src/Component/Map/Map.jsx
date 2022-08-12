import React, { useEffect } from 'react'
const { kakao } = window

const Map = () => {
    useEffect(() => {
        // 이미지 지도에 표시할 마커입니다
        // 이미지 지도에 표시할 마커를 아래와 같이 배열로 넣어주면 여러개의 마커를 표시할 수 있습니다 
        var markers = [
            {
                position: new kakao.maps.LatLng(37.448798795115835, 126.65612610643979)
            },
            {
                position: new kakao.maps.LatLng(37.448798795115835, 126.65612610643979),
                text: '김현태인하드림센터' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다     
            }
        ];

        var staticMapContainer = document.getElementById('map'), // 이미지 지도를 표시할 div  
            staticMapOption = {
                center: new kakao.maps.LatLng(37.448798795115835, 126.65612610643979), // 이미지 지도의 중심좌표
                level: 3, // 이미지 지도의 확대 레벨
                marker: markers // 이미지 지도에 표시할 마커 
            };

        // 이미지 지도를 생성합니다
        new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    }, [])


    return (
        <div id='map'
            style={{ width: "600px", height: "350px", zIndex:"100"}}></div>
    )
}

export default Map


// 37.448798795115835, 126.65612610643979