import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const synapseList = [
        {
            image: "/synapse1.jpeg",
            name: "ELECTRONIC MURDERER: A FEAST FOR THE EYES",
            desc: "클라우드 돌 하우스의 ‘마리아’는 접대할 때 눈을 보지 않는다.\n접시에 올라간 수천 개의 안구들, 오늘의 빨간 눈은 당신이야…….",
        },
        {
            image: "/synapse2.jpeg",
            name: "ARASAKA FOMULA ONE: 체험 삶의 현장",
            desc: "F1 정비사와 러닝 사이보그의 익사이팅 체험기\n피트인에 주어지는 시간은 단 2.29초",
        },
        {
            image: "/shopack.png",
            name: "WHO",
            desc: "누구에게 쫓기는 것일까? 헐떡이는 숨, 뇌를 지배한 공포, 치열한 생존 본능",
        },
        {
            image: "/synapse3.jpeg",
            name: "3 MOUTHS 1 DESIRE - SASHADEVON EXP R등급",
            desc: "구강과 구강과  구강이 만나는 곳\n“하나의 욕망이 어디까지 커질 수 있는지 알고 싶어요?”",
        },
        {
            image: "/synapse4.jpeg",
            name: "KIROSHI GIRLS OPTICAL: ep.11 ラブライブ! ",
            desc: "키로시 걸즈의 데뷔 로드 완결편!\n미개봉 해적판_자막ver.",
        },
        {
            image: "/synapse5.jpeg",
            name: "CYBER-PSYCHOSIS: 브렉 구획 KILIAN",
            desc: "단독 입수! 브렉 구획에서 발생한 사이버 사이코 KILIAN 살상기\n맥스택 바디캠 포함\n“Got us a Cyber-psycho! Raise MaxTac now!”",
        },
        {
            image: "/synapse6.jpeg",
            name: "Shit and Gore Tour: Xidex, EC",
            desc: "이번에는 인간이다. 사냥, 도축, 조리, 섭취까지\n1인칭으로 즐기는 고어 투어",
        },
        {
            image: "/synapse7.jpeg",
            name: "Do Not Speak Anything",
            desc: "당신의 자제력이 얼마나 되는지 테스트해 볼까요?\n말하는 순간 혀가 잘리고 움직이는 순간 발목이 잘리는 스릴 넘치는 서바이벌",
        },
        {
            image: "/synapse8.jpeg",
            name: "행성 4576-WPO5 히탈라마",
            desc: "타 행성인의 접근이 허용되지 않는다는 불모지 행성 4576-WPO5\n그 안에 숨겨진 괴종교 히탈라마의 진실",
        },
    ];
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: isSmallScreen ? "100%" : "30%",
                    height: "100%",
                    background: "url(/background.png) 50% 50% no-repeat",
                    backgroundSize: "cover",
                    padding: "4vh",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4vh",
                    overflow: "scroll",
                }}
            >
                {synapseList.map((synpase) => (
                    <Box
                        key={synpase.name}
                        sx={{
                            flex: "0 0 auto",
                            width: "100%",
                            height: "17vh",
                            background: `url(${synpase.image}) 50% 50% no-repeat`,
                            backgroundSize: "cover",
                            border: "1px solid #5df", // 네온 컬러의 테두리
                            boxShadow: `
                                0 0 3px #5df,
                                0 0 6px #5df,
                                0 0 9px #5df,
                                0 0 12px #5df
                            `,
                        }}
                        onClick={() => {
                            navigate("/product", {
                                state: synpase,
                            });
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
