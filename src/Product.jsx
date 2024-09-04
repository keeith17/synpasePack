import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
export default function Product() {
    const location = useLocation();
    const { image, name, desc } = location.state || {};

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
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
                    background:
                        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/background.png) 50% 50% no-repeat",
                    backgroundSize: "cover",
                    padding: "4vh",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4vh",
                    overflow: "scroll",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        border: "1px solid #5df", // 네온 컬러의 테두리
                        boxShadow: `
                            0 0 3px #5df,
                            0 0 6px #5df,
                            0 0 9px #5df,
                            0 0 12px #5df
                        `,
                    }}
                    src={image}
                    alt={image}
                />
                <Typography
                    sx={{
                        fontSize: "3vh",
                        fontWeight: 700,
                    }}
                >
                    {name}
                </Typography>
                <Typography>{desc}</Typography>
            </Box>
        </Box>
    );
}
