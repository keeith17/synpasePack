import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const synapseList = [
        { image: "/synapse1.jpeg", name: "1번시냅스", desc: "1번설명" },
        { image: "/synapse2.jpeg", name: "2번시냅스", desc: "2번설명" },
        { image: "/synapse3.jpeg", name: "3번시냅스", desc: "3번설명" },
        { image: "/synapse4.jpeg", name: "4번시냅스", desc: "4번설명" },
        { image: "/synapse5.jpeg", name: "5번시냅스", desc: "5번설명" },
        { image: "/synapse6.jpeg", name: "6번시냅스", desc: "6번설명" },
        { image: "/synapse7.jpeg", name: "7번시냅스", desc: "7번설명" },
        { image: "/synapse8.jpeg", name: "8번시냅스", desc: "8번설명" },
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
                    background: "url(/background.jpeg) 50% 50% no-repeat",
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
