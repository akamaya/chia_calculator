// plotの種類とサイズ一覧(GiB)
const PLOT_SIZE = {
    'K32': 101.4,
    'NOSSD_C1': 84.5,
    'NOSSD_C2': 82.9,
    'NOSSD_C3': 81.3,
    'NOSSD_C4': 79.7,
    'NOSSD_C5': 78.1,
    'NOSSD_C10': 70.8,
    'NOSSD_C11': 64.9,
    'NOSSD_C12': 60.8,
    'NOSSD_C13': 57.3,
    'NOSSD_C14': 53.8,
    'NOSSD_C15': 50.3,
    'NOSSD_C30': 47.51,
    'NOSSD_C31': 44.93,
    'NOSSD_C32': 42.30,
    'NOSSD_C33': 39.65,
    'NOSSD_C34': 36.96,
    'NOSSD_C35': 34.36,
    'NOSSD_C36': 31.71,
    'NOSSD_C37': 28.96,
    'NOSSD_C38': 26.16,

    'GIGAHORSE_C11': 85.7,
    'GIGAHORSE_C12': 82.5,
    'GIGAHORSE_C13': 78.9,
    'GIGAHORSE_C14': 74.7,
    'GIGAHORSE_C15': 71.6,
    'GIGAHORSE_C16': 64.8,
    'GIGAHORSE_C17': 63.0,
    'GIGAHORSE_C18': 59.7,
    'GIGAHORSE_C19': 56.4,
    'GIGAHORSE_C20': 53.1,
    'GIGAHORSE_C29': 48.0,
    'GIGAHORSE_C30': 43.3,
    'GIGAHORSE_C31': 38.6,
    'GIGAHORSE_C32': 33.9,
    'GIGAHORSE_C33': 29.1,
    // DrPlotter
    'DrPlotter_Eco3x': 34.4,
    'DrPlotter_Pro4x': 24.6,
}

// GPUの消費電力一覧
const GPU_POWER_CONSUMPTION = {
    'RTX2070(8GB)': 185,
    'RTX2080Ti(11GB)': 270,
    'RTX3060(8GB)': 170,
    'RTX3060(12GB)': 170,
    'RTX3060Ti(8GB)': 200,
    'RTX3070(8GB)': 220,
    'RTX3070Ti(8GB)': 290,
    'RTX3080(10GB)': 320,
    'RTX3080(12GB)': 350,
    'RTX3080Ti(12GB)': 350,
    'RTX3090(24GB)': 350,
    'RTX3090Ti(24GB)': 450,
    'RTX4060(8GB)': 115,
    'RTX4060Ti(8GB)': 160,
    'RTX4060Ti(16GB)': 165,
    'RTX4070(12GB)': 200,
    'RTX4070Super(12GB)': 220,
    'RTX4070Ti(12GB)': 285,
    'RTX4070TiSuper(16GB)': 285,
    'RTX4080(16GB)': 320,
    'RTX4080Super(16GB)': 320,
    'RTX4090(24GB)': 450,
    'RTX5070(12GB)': 250,
    'RTX5070Ti(16GB)': 300,
    'RTX5080(16GB)': 360,
    'RTX5090(32GB)': 575,
    'RTXA4000(16GB)': 140,
    'RTXA5000(24GB)': 230,
}
// GPUのお値段一覧
const GPU_PRICE = {
    'RTX2070(8GB)': 25000,
    'RTX2080Ti(11GB)': 45000,
    'RTX3060(8GB)': 38000,
    'RTX3060(12GB)': 42000,
    'RTX3060Ti(8GB)': 60000,
    'RTX3070(8GB)': 60000,
    'RTX3070Ti(8GB)': 61000,
    'RTX3080(10GB)': 90000,
    'RTX3080(12GB)': 100000,
    'RTX3080Ti(12GB)': 100000,
    'RTX3090(24GB)': 262000,
    'RTX3090Ti(24GB)': 280000,
    'RTX4060(8GB)': 43000,
    'RTX4060Ti(8GB)': 55000,
    'RTX4060Ti(16GB)': 68800,
    'RTX4070(12GB)': 83000,
    'RTX4070Super(12GB)': 98000,
    'RTX4070Ti(12GB)': 110000,
    'RTX4070TiSuper(16GB)': 130000,
    'RTX4080(16GB)': 173000,
    'RTX4080Super(16GB)': 169000,
    'RTX4090(24GB)': 280000,
    'RTX5070(12GB)': 108000,
    'RTX5070Ti(16GB)': 198000,
    'RTX5080(16GB)': 220000,
    'RTX5090(32GB)': 400000,
    'RTXA4000(16GB)': 115000,
    'RTXA5000(24GB)': 360000,
}

// 処理可能スペース一覧に設定がないときベンチマーク値の比率で推定値に使う
// ここに書かれたのはNOSSDの256filterのC15ベンチマーク値(一部推定値なので割と適当)
const GPU_POWER = {
    'RTX2070(8GB)': 4500,
    'RTX2080Ti(11GB)': 6000,
    'RTX3060(8GB)': 4800,
    'RTX3060(12GB)': 4800,
    'RTX3060Ti(8GB)': 6000,
    'RTX3070(8GB)': 6750,
    'RTX3070Ti(8GB)': 7500,
    'RTX3080(10GB)': 11000,
    'RTX3080(12GB)': 11000,
    'RTX3080Ti(12GB)': 11500,
    'RTX3090(24GB)': 13000,
    'RTX3090Ti(24GB)': 14250,
    'RTX4060(8GB)': 8500,
    'RTX4060Ti(8GB)': 10500,
    'RTX4060Ti(16GB)': 10500,
    'RTX4070(12GB)': 12650,
    'RTX4070Super(12GB)': 15250,
    'RTX4070Ti(12GB)': 16600,
    'RTX4070TiSuper(16GB)': 17700,
    'RTX4080(16GB)': 20650,
    'RTX4080Super(16GB)': 20650,
    'RTX4090(24GB)': 26600,
    'RTX5070(12GB)': 11700,
    'RTX5070Ti(16GB)': 13500, //推定値
    'RTX5080(16GB)': 18900,
    'RTX5090(32GB)': 31900,
    'RTXA4000(16GB)': 8000,
    'RTXA5000(24GB)': 10000,
}

// GPUの処理可能スペース一覧
const GPU_PROCESSABLE_SPACE_PiB = [
    // NOSSD
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C10", size: 9.95 },// PiB
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C11", size: 3.37 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C12", size: 1.80 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C13", size: 1.08 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C14", size: 0.54 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C15", size: 0.21 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C30", size: 0.61 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C31", size: 0.45 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C32", size: 0.32 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C33", size: 0.21 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C34", size: 0.13 },
    { "gpu": "RTX3060(8GB)", "type": "NOSSD_C35", size: 0.08 },

    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C10", size: 9.95 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C11", size: 3.37 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C12", size: 1.80 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C13", size: 1.08 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C14", size: 0.54 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C15", size: 0.21 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C30", size: 0.61 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C31", size: 0.45 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C32", size: 0.32 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C33", size: 0.21 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C34", size: 0.13 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C35", size: 0.08 },
    { "gpu": "RTX3060(12GB)", "type": "NOSSD_C36", size: 0.03 },

    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C10", size: 10.74 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C11", size: 4.80 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C12", size: 2.59 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C13", size: 1.50 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C14", size: 0.76 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C15", size: 0.31 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C30", size: 0.88 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C31", size: 0.67 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C32", size: 0.47 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C33", size: 0.32 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C34", size: 0.20 },
    { "gpu": "RTX3060Ti(8GB)", "type": "NOSSD_C35", size: 0.12 },

    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C10", size: 15.48 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C11", size: 7.80 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C12", size: 4.61 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C13", size: 2.55 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C14", size: 1.25 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C15", size: 0.53 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C30", size: 1.42 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C31", size: 1.07 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C32", size: 0.74 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C33", size: 0.51 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C34", size: 0.32 },
    { "gpu": "RTX3080(10GB)", "type": "NOSSD_C35", size: 0.20 },

    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C10", size: 15.48 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C11", size: 7.80 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C12", size: 4.61 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C13", size: 2.55 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C14", size: 1.25 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C15", size: 0.53 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C30", size: 1.42 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C31", size: 1.07 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C32", size: 0.74 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C33", size: 0.51 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C34", size: 0.32 },
    { "gpu": "RTX3080(12GB)", "type": "NOSSD_C35", size: 0.20 },

    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C10", size: 22.02 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C11", size: 9.20 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C12", size: 5.47 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C13", size: 3.03 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C14", size: 1.49 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C15", size: 0.63 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C30", size: 1.66 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C31", size: 1.27 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C32", size: 0.91 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C33", size: 0.61 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C34", size: 0.39 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C35", size: 0.24 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C36", size: 0.12 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C37", size: 0.07 },
    { "gpu": "RTX3090(24GB)", "type": "NOSSD_C38", size: 0.04 },

    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C10", size: 22.37 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C11", size: 10.54 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C12", size: 6.17 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C13", size: 3.48 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C14", size: 1.80 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C15", size: 0.73 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C30", size: 1.72 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C31", size: 1.41 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C32", size: 1.00 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C33", size: 0.70 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C34", size: 0.42 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C35", size: 0.25 },
    { "gpu": "RTX4070Super(12GB)", "type": "NOSSD_C36", size: 0.12 },


    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C10", size: 31.37 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C11", size: 12.06 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C12", size: 7.16 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C13", size: 4.18 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C14", size: 2.16 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C15", size: 0.93 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C30", size: 1.92 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C31", size: 1.55 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C32", size: 1.17 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C33", size: 0.79 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C34", size: 0.49 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C35", size: 0.31 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C36", size: 0.16 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "NOSSD_C37", size: 0.09 },

    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C10", size: 40.01 },
    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C11", size: 13.82 },
    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C12", size: 8.27 },
    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C13", size: 4.78 },
    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C14", size: 2.50 },
    { "gpu": "RTX4080(16GB)", "type": "NOSSD_C15", size: 1.04 },

    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C10", size: 68.4 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C11", size: 22.5 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C12", size: 13.1 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C13", size: 7.54 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C14", size: 3.93 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C15", size: 1.56 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C30", size: 3.66 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C31", size: 2.90 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C32", size: 2.02 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C33", size: 1.32 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C34", size: 0.87 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C35", size: 0.53 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C36", size: 0.27 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C37", size: 0.17 },
    { "gpu": "RTX4090(24GB)", "type": "NOSSD_C38", size: 0.10 },

    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C10", size: 24.6 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C11", size: 7.82 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C12", size: 4.88 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C13", size: 2.92 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C14", size: 1.46 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C15", size: 0.56 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C30", size: 1.62 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C31", size: 1.29 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C32", size: 0.96 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C33", size: 0.67 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C34", size: 0.37 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C35", size: 0.23 },
    { "gpu": "RTX5070(12GB)", "type": "NOSSD_C36", size: 0.11 },

    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C10", size: 43.0 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C11", size: 13.6 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C12", size: 8.24 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C13", size: 4.73 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C14", size: 2.31 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C15", size: 0.91 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C30", size: 2.70 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C31", size: 2.13 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C32", size: 1.57 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C33", size: 1.09 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C34", size: 0.62 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C35", size: 0.38 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C36", size: 0.19 },
    { "gpu": "RTX5080(16GB)", "type": "NOSSD_C37", size: 0.12 },

    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C10", size: 70.6 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C11", size: 27.0 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C12", size: 14.7 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C13", size: 9.13 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C14", size: 3.99 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C15", size: 1.53 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C30", size: 4.94 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C31", size: 3.85 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C32", size: 2.81 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C33", size: 1.82 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C34", size: 1.10 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C35", size: 0.74 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C36", size: 0.43 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C37", size: 0.25 },
    { "gpu": "RTX5090(32GB)", "type": "NOSSD_C38", size: 0.14 },

    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C10", size: 13.98 },
    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C11", size: 4.91 },
    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C12", size: 2.51 },
    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C13", size: 1.46 },
    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C14", size: 0.76 },
    { "gpu": "RTXA4000(16GB)", "type": "NOSSD_C15", size: 0.33 },

    // GIGAHORSE
    { "gpu": "RTX2070(8GB)", "type": "GIGAHORSE_C30", size: 0.27 },// PiB
    { "gpu": "RTX2070(8GB)", "type": "GIGAHORSE_C31", size: 0.16 },

    { "gpu": "RTX2080Ti(11GB)", "type": "GIGAHORSE_C30", size: 0.45 },

    { "gpu": "RTX3060(8GB)", "type": "GIGAHORSE_C29", size: 0.574 },
    { "gpu": "RTX3060(8GB)", "type": "GIGAHORSE_C30", size: 0.363 },
    { "gpu": "RTX3060(8GB)", "type": "GIGAHORSE_C31", size: 0.175 },
    { "gpu": "RTX3060(8GB)", "type": "GIGAHORSE_C32", size: 0.08 },

    { "gpu": "RTX3060(12GB)", "type": "GIGAHORSE_C29", size: 0.574 },
    { "gpu": "RTX3060(12GB)", "type": "GIGAHORSE_C30", size: 0.363 },
    { "gpu": "RTX3060(12GB)", "type": "GIGAHORSE_C31", size: 0.175 },
    { "gpu": "RTX3060(12GB)", "type": "GIGAHORSE_C32", size: 0.08 },

    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C11", size: 166.435 },// PiB
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C12", size: 133.365 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C13", size: 75.45 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C14", size: 24.845 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C15", size: 10.50 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C16", size: 2.79 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C17", size: 2.01 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C18", size: 1.31 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C19", size: 0.74 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C20", size: 0.36 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C29", size: 0.83 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C30", size: 0.51 },
    { "gpu": "RTX3060Ti(8GB)", "type": "GIGAHORSE_C31", size: 0.25 },

    { "gpu": "RTX3070(8GB)", "type": "GIGAHORSE_C30", size: 0.540 },
    { "gpu": "RTX3070(8GB)", "type": "GIGAHORSE_C31", size: 0.290 },

    { "gpu": "RTX3070Ti(8GB)", "type": "GIGAHORSE_C30", size: 0.580 },

    { "gpu": "RTX3080(10GB)", "type": "GIGAHORSE_C30", size: 0.760 },
    { "gpu": "RTX3080(10GB)", "type": "GIGAHORSE_C31", size: 0.400 },

    { "gpu": "RTX3080(12GB)", "type": "GIGAHORSE_C30", size: 0.760 },
    { "gpu": "RTX3080(12GB)", "type": "GIGAHORSE_C31", size: 0.400 },

    { "gpu": "RTX3080Ti(12GB)", "type": "GIGAHORSE_C30", size: 0.90 },
    { "gpu": "RTX3080Ti(12GB)", "type": "GIGAHORSE_C31", size: 0.470 },
    { "gpu": "RTX3080Ti(12GB)", "type": "GIGAHORSE_C32", size: 0.210 },

    { "gpu": "RTX3090(24GB)", "type": "GIGAHORSE_C30", size: 0.90 },
    { "gpu": "RTX3090(24GB)", "type": "GIGAHORSE_C31", size: 0.48 },
    { "gpu": "RTX3090(24GB)", "type": "GIGAHORSE_C32", size: 0.20 },
    { "gpu": "RTX3090(24GB)", "type": "GIGAHORSE_C33", size: 0.096 },

    { "gpu": "RTX4060(8GB)", "type": "GIGAHORSE_C30", size: 0.36 },
    { "gpu": "RTX4060(8GB)", "type": "GIGAHORSE_C31", size: 0.20 },

    { "gpu": "RTX4060Ti(8GB)", "type": "GIGAHORSE_C29", size: 0.84 },
    { "gpu": "RTX4060Ti(8GB)", "type": "GIGAHORSE_C30", size: 0.52 },
    { "gpu": "RTX4060Ti(8GB)", "type": "GIGAHORSE_C31", size: 0.27 },

    { "gpu": "RTX4060Ti(16GB)", "type": "GIGAHORSE_C29", size: 0.84 },
    { "gpu": "RTX4060Ti(16GB)", "type": "GIGAHORSE_C30", size: 0.52 },
    { "gpu": "RTX4060Ti(16GB)", "type": "GIGAHORSE_C31", size: 0.27 },

    { "gpu": "RTX4070(12GB)", "type": "GIGAHORSE_C30", size: 0.617 },
    { "gpu": "RTX4070(12GB)", "type": "GIGAHORSE_C31", size: 0.343 },
    { "gpu": "RTX4070(12GB)", "type": "GIGAHORSE_C32", size: 0.155 },

    { "gpu": "RTX4070Super(12GB)", "type": "GIGAHORSE_C29", size: 1.34 },
    { "gpu": "RTX4070Super(12GB)", "type": "GIGAHORSE_C30", size: 0.85 },
    { "gpu": "RTX4070Super(12GB)", "type": "GIGAHORSE_C31", size: 0.44 },
    { "gpu": "RTX4070Super(12GB)", "type": "GIGAHORSE_C32", size: 0.19 },

    { "gpu": "RTX4070TiSuper(16GB)", "type": "GIGAHORSE_C30", size: 0.858 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "GIGAHORSE_C31", size: 0.497 },
    { "gpu": "RTX4070TiSuper(16GB)", "type": "GIGAHORSE_C32", size: 0.244 },

    { "gpu": "RTX4080(16GB)", "type": "GIGAHORSE_C30", size: 0.9 },
    { "gpu": "RTX4080(16GB)", "type": "GIGAHORSE_C31", size: 0.5 },

    { "gpu": "RTX4080Super(16GB)", "type": "GIGAHORSE_C31", size: 0.234 },

    { "gpu": "RTX4090(24GB)", "type": "GIGAHORSE_C29", size: 2.90 },
    { "gpu": "RTX4090(24GB)", "type": "GIGAHORSE_C30", size: 1.81 },
    { "gpu": "RTX4090(24GB)", "type": "GIGAHORSE_C31", size: 0.93 },
    { "gpu": "RTX4090(24GB)", "type": "GIGAHORSE_C32", size: 0.39 },
    { "gpu": "RTX4090(24GB)", "type": "GIGAHORSE_C33", size: 0.17 },

    { "gpu": "RTXA4000(24GB)", "type": "GIGAHORSE_C31", size: 0.23 },
    { "gpu": "RTXA4000(24GB)", "type": "GIGAHORSE_C32", size: 0.105 },

    { "gpu": "RTXA5000(24GB)", "type": "GIGAHORSE_C30", size: 0.61 },
    { "gpu": "RTXA5000(24GB)", "type": "GIGAHORSE_C31", size: 0.335 },
    { "gpu": "RTXA5000(24GB)", "type": "GIGAHORSE_C32", size: 0.155 },
    { "gpu": "RTXA5000(24GB)", "type": "GIGAHORSE_C33", size: 0.065 },

    // DrPlotter
    { "gpu": "RTX3090(24GB)", "type": "DrPlotter_Eco3x", size: 0.245 },//PiB
    { "gpu": "RTX3090(24GB)", "type": "DrPlotter_Pro4x", size: 0.10 },
    { "gpu": "RTX4090(24GB)", "type": "DrPlotter_Eco3x", size: 0.450 },
    { "gpu": "RTX4090(24GB)", "type": "DrPlotter_Pro4x", size: 0.20 },
]




//ドキュメント内のどれでもいいのでinput textの要素が変更されたら、cal系関数を実行する

function cal_all() {
    const item_box_values = item_box_to_values();
    cal_income(item_box_values);
    cal_expense(item_box_values);
    cal_chia_data(item_box_values);
    cal_gpu_data(item_box_values);
    cal_hdd_profit_data(item_box_values);
    cal_hdd_gpu_profit_data(item_box_values);
}

function item_box_to_values() {
    // 数字系のinput要素のidを配列で定義
    const item_box_ids = [
        'cal_item_box_chia_price_usd',
        'cal_item_box_usd_jpy',
        'cal_item_box_electricity_unit_price',
        'cal_item_box_electricity_eco_price',
        'cal_item_box_fuel_adjustment_cost',
        'cal_item_box_chia_dividend',
        'cal_item_box_network_space_eib',
    ];
    const item_box_values = {}
    item_box_ids.forEach(function(item_box_id) {
        const item_box_value = Number(document.getElementById(item_box_id).value);
        item_box_values[item_box_id] = item_box_value;
    });

    // plotの情報を取得(GiB)
    const selectBox = document.getElementById('plot_type');
    const selectedOption = selectBox.options[selectBox.selectedIndex];
    const selectValue = selectedOption.value;
    item_box_values.official_plot_size = PLOT_SIZE['K32'];
    item_box_values.plot_size = PLOT_SIZE[selectValue];


    return item_box_values;
}

// chia_usdとusd_jpyからchia_jpyを計算して表示する
function cal_income(item_box_values) {
  const chia_jpy = Math.floor(item_box_values.cal_item_box_chia_price_usd * item_box_values.cal_item_box_usd_jpy);
  item_box_values.cal_item_box_chia_price_jpy = chia_jpy;
  document.getElementById('cal_item_box_chia_price_jpy').textContent = chia_jpy;
}

function cal_expense(item_box_values){
    const expense = Math.floor(
        (item_box_values.cal_item_box_electricity_unit_price + 
        item_box_values.cal_item_box_electricity_eco_price +
        item_box_values.cal_item_box_fuel_adjustment_cost)*100)/100;
    item_box_values.cal_item_box_electricity_total_price = expense;
    document.getElementById('cal_item_box_electricity_total_price').textContent = expense;
    
}

function cal_chia_data(item_box_values){
    // chiaの1日の当選回数
    item_box_values.win_per_day = 4608;
    // xchの1日の発行数
    item_box_values.win_xch_per_day = item_box_values.cal_item_box_chia_dividend * item_box_values.win_per_day;

    // ネットワークスペースをTiBに直す
    item_box_values.network_space_tib = item_box_values.cal_item_box_network_space_eib * 1024 * 1024;

    // 1日1回当選に必要なスペース(TiB) ※公式プロット換算
    item_box_values.win_space_per_day_tib = item_box_values.network_space_tib / item_box_values.win_xch_per_day;
    
    // 当選期待日数/plot
    item_box_values.win_space_per_day_gib = item_box_values.win_space_per_day_tib * 1024;
    item_box_values.win_days_per_plot = item_box_values.win_space_per_day_gib / item_box_values.official_plot_size;

    // 当選期待日数/TiB ※設定プロット換算
    item_box_values.win_days_per_tib = item_box_values.win_space_per_day_gib * item_box_values.plot_size / item_box_values.official_plot_size / 1024;

    // 当選期待日数/TB ※設定プロット換算
    item_box_values.win_days_per_tb = tib_to_tb(item_box_values.win_days_per_tib)

    // 1日当選期待収入/TB XCH, USD, JPY
    item_box_values.income_per_day_tb_xch = 1000000 / item_box_values.win_days_per_tb / 1000000;
    item_box_values.income_per_day_tb_usd = item_box_values.income_per_day_tb_xch * item_box_values.cal_item_box_chia_price_usd;
    item_box_values.income_per_day_tb_jpy = item_box_values.income_per_day_tb_xch * item_box_values.cal_item_box_chia_price_jpy;


    document.getElementById('cal_item_box_win_days_per_plot').textContent = Math.ceil(item_box_values.win_days_per_plot);
    document.getElementById('cal_item_box_win_days_per_tib').textContent = Math.ceil(item_box_values.win_days_per_tib);
    document.getElementById('cal_item_box_win_days_per_tb').textContent = Math.ceil(item_box_values.win_days_per_tb);
    document.getElementById('cal_item_box_income_tb_per_day_xch').textContent = floor6(item_box_values.income_per_day_tb_xch);
    document.getElementById('cal_item_box_income_tb_per_day_usd').textContent = floor6(item_box_values.income_per_day_tb_usd);
    document.getElementById('cal_item_box_income_tb_per_day_jpy').textContent = floor2(item_box_values.income_per_day_tb_jpy);

}

function cal_gpu_data(item_box_values){

    // 選択されているplotのタイプを取得
    const selectBox_plot = document.getElementById('plot_type');
    const selectedOption = selectBox_plot.options[selectBox_plot.selectedIndex];
    const plot_type = selectedOption.value;
    const plot_type_name = selectedOption.textContent;

    // CPU系plotの場合はGPUの設定を無効にする
    if(plot_type_name.includes('CPU')){
        const gpu_data = document.getElementById('gpu_data');
        gpu_data.classList.add('disabled');
        
        document.getElementById('gpu_type').disabled = true;
        document.getElementById('cal_item_box_gpu_price').disabled = true;
        document.getElementById('cal_item_box_gpu_power_consumption').disabled = true;
        document.getElementById('cal_item_box_gpu_processable_space_tib').disabled = true;
        item_box_values.gpu_price = 0;
        item_box_values.gpu_power_consumption_per_tib = 0;
        item_box_values.gpu_power_consumption_per_tb = 0;
        return
    }

    // GPU系のplotの場合はGPUの処理可能スペースとその他の項目を計算する
    const gpu_data = document.getElementById('gpu_data');
    gpu_data.classList.remove('disabled');
    document.getElementById('gpu_type').disabled = false;
    document.getElementById('cal_item_box_gpu_power_consumption').disabled = false;
    document.getElementById('cal_item_box_gpu_processable_space_tib').disabled = false;


    
    // 消費電力を取得
    const item_box_gpu_price = Number(document.getElementById('cal_item_box_gpu_price').value);
    const item_box_gpu_power_consumption = Number(document.getElementById('cal_item_box_gpu_power_consumption').value);
    const item_box_gpu_processable_space_tib = Number(document.getElementById('cal_item_box_gpu_processable_space_tib').value);

    const power_consumption_per_tib = item_box_gpu_power_consumption / item_box_gpu_processable_space_tib;

    item_box_values.gpu_price = item_box_gpu_price;
    item_box_values.gpu_processable_plot_num = Math.floor(item_box_gpu_processable_space_tib * 1024 / item_box_values.plot_size);
    item_box_values.gpu_power_consumption_per_tib = power_consumption_per_tib;
    // tb_to_tibで合ってるよ
    item_box_values.gpu_power_consumption_per_tb = tb_to_tib(power_consumption_per_tib) ;
    document.getElementById('cal_item_box_gpu_processable_plot_num').textContent = item_box_values.gpu_processable_plot_num;
    document.getElementById('cal_item_box_gpu_power_consumption_per_tib').textContent = floor2(item_box_values.gpu_power_consumption_per_tib);
    document.getElementById('cal_item_box_gpu_power_consumption_per_tb').textContent = floor2(item_box_values.gpu_power_consumption_per_tb);
    
}

function cal_hdd_profit_data(item_box_values){
    const hdd_profit_data = document.getElementById('hdd_profit_data');
    const hdd_data_list = Array.from(hdd_profit_data.getElementsByClassName('hdd_data'));

    
    const hdd_power_consumption = Number(hdd_profit_data.getElementsByClassName('hdd_power_consumption')[0].value);
    const gpu_power_consumption_per_tb = item_box_values.gpu_power_consumption_per_tb;
    hdd_data_list.forEach(function(hdd_data){
        const hdd_capa_tb = Number(hdd_data.getElementsByClassName('hdd_capa')[0].value);
        const hdd_price = Number(hdd_data.getElementsByClassName('hdd_price')[0].value);
        const gpu_power_consumption = gpu_power_consumption_per_tb * hdd_capa_tb;

        const hdd_and_gpu_power_consumption = hdd_power_consumption + gpu_power_consumption ;
        hdd_data.getElementsByClassName('hdd_power_consumption_table')[0].textContent = hdd_power_consumption + 'W + ' + floor2(gpu_power_consumption) + 'W';
        
        const hdd_plots_num  = Math.floor(tb_to_tib(hdd_capa_tb) * 1024 / item_box_values.plot_size);
        hdd_data.getElementsByClassName('hdd_plots_num_table')[0].textContent = hdd_plots_num;
        
        const hdd_revenue_per_day_table  = item_box_values.income_per_day_tb_jpy * hdd_capa_tb;
        hdd_data.getElementsByClassName('hdd_revenue_per_day_table')[0].textContent = floor2(hdd_revenue_per_day_table);

        const hdd_expenses_per_day_table  = hdd_and_gpu_power_consumption * 24 * item_box_values.cal_item_box_electricity_total_price / 1000;
        hdd_data.getElementsByClassName('hdd_expenses_per_day_table')[0].textContent = floor2(hdd_expenses_per_day_table);
        
        const hdd_profit_per_day_table  = hdd_revenue_per_day_table - hdd_expenses_per_day_table;
        hdd_data.getElementsByClassName('hdd_profit_per_day_table')[0].textContent = floor2(hdd_profit_per_day_table);

        const hdd_profit_per_year_table = hdd_profit_per_day_table * 365;
        hdd_data.getElementsByClassName('hdd_profit_per_year_table')[0].textContent = Math.floor(hdd_profit_per_year_table);
        
        const hdd_recovery_table = cal_recovery_year_month(hdd_price , hdd_profit_per_day_table);

        hdd_data.getElementsByClassName('hdd_recovery_table')[0].textContent = hdd_recovery_table;
        
        
    });
    
}


function cal_hdd_gpu_profit_data(item_box_values){
    const hdd_profit_data = document.getElementById('hdd_gpu_profit_data');
    const hdd_data_list = Array.from(hdd_profit_data.getElementsByClassName('hdd_data'));

    // HDDの消費電力を取得
    const hdd_power_consumption = Number(hdd_profit_data.getElementsByClassName('hdd_power_consumption')[0].value);
    const gpu_power_consumption_per_tb = item_box_values.gpu_power_consumption_per_tb;

    // GPUの価格を取得
    const gpu_price = item_box_values.gpu_price;

    // GPUの処理可能スペースを取得
    const cal_item_box_gpu_processable_space_tib = document.getElementById('cal_item_box_gpu_processable_space_tib');
    const gpu_processable_space_tib = Number(cal_item_box_gpu_processable_space_tib.value);
    const gpu_processable_space_tb = tib_to_tb(gpu_processable_space_tib);

    hdd_data_list.forEach(function(hdd_data){
        const hdd_capa_tb = Number(hdd_data.getElementsByClassName('hdd_capa')[0].value);
        const hdd_price = Number(hdd_data.getElementsByClassName('hdd_price')[0].value);
        const gpu_power_consumption = gpu_power_consumption_per_tb * hdd_capa_tb;

        const gpu_price_per_hdd = Math.floor(gpu_price * hdd_capa_tb / gpu_processable_space_tb);
        hdd_data.getElementsByClassName('gpu_price')[0].textContent = gpu_price_per_hdd;

        const hdd_and_gpu_power_consumption = hdd_power_consumption + gpu_power_consumption ;
        hdd_data.getElementsByClassName('hdd_power_consumption_table')[0].textContent = hdd_power_consumption + 'W + ' + floor2(gpu_power_consumption) + 'W';
        
        const hdd_plots_num  = Math.floor(tb_to_tib(hdd_capa_tb) * 1024 / item_box_values.plot_size);
        hdd_data.getElementsByClassName('hdd_plots_num_table')[0].textContent = hdd_plots_num;
        
        const hdd_revenue_per_day_table  = item_box_values.income_per_day_tb_jpy * hdd_capa_tb;
        hdd_data.getElementsByClassName('hdd_revenue_per_day_table')[0].textContent = floor2(hdd_revenue_per_day_table);

        const hdd_expenses_per_day_table  = hdd_and_gpu_power_consumption * 24 * item_box_values.cal_item_box_electricity_total_price / 1000;
        hdd_data.getElementsByClassName('hdd_expenses_per_day_table')[0].textContent = floor2(hdd_expenses_per_day_table);
        
        const hdd_profit_per_day_table  = hdd_revenue_per_day_table - hdd_expenses_per_day_table;
        hdd_data.getElementsByClassName('hdd_profit_per_day_table')[0].textContent = floor2(hdd_profit_per_day_table);

        const hdd_profit_per_year_table = hdd_profit_per_day_table * 365;
        hdd_data.getElementsByClassName('hdd_profit_per_year_table')[0].textContent = Math.floor(hdd_profit_per_year_table);
        
        const hdd_recovery_table = cal_recovery_year_month(hdd_price + gpu_price_per_hdd, hdd_profit_per_day_table);

        hdd_data.getElementsByClassName('hdd_recovery_table')[0].textContent = hdd_recovery_table;
        
        
    });
    
}

function cal_recovery_year_month(price, profit_per_day){
    let recovery_table = "-";
    if(profit_per_day > 0){
        const recovery_days_table = Math.ceil(price / profit_per_day);
        let recovery_years = Math.floor(recovery_days_table / 365);
        let recovery_months = Math.ceil((recovery_days_table % 365) / 30);// 361日以上余ると13ヶ月になる
        if (recovery_months >= 12) {
            recovery_years += 1;
            recovery_months = 0;
        }
        recovery_table = recovery_years + '年' + recovery_months + 'ヶ月';
    }
    return recovery_table;
}

// GPUが選択されたときは消費電力と価格を変更する
function set_gpu_power_consumption_and_price_data(){

    // 選択されているplotのタイプを取得
    const selectBox_plot = document.getElementById('plot_type');
    const selectedOption = selectBox_plot.options[selectBox_plot.selectedIndex];
    const plot_type = selectedOption.value;

    // GPUのタイプを取得
    const selectBox_gpu = document.getElementById('gpu_type');
    const selectedOption_gpu = selectBox_gpu.options[selectBox_gpu.selectedIndex];
    const gpu_type = selectedOption_gpu.value;

    // GPUの消費電力をセット
    const item_box_gpu_power_consumption = document.getElementById('cal_item_box_gpu_power_consumption');
    item_box_gpu_power_consumption.value = GPU_POWER_CONSUMPTION[gpu_type];

    const cal_item_box_gpu_price = document.getElementById('cal_item_box_gpu_price');
    cal_item_box_gpu_price.value = GPU_PRICE[gpu_type];
}


// GPUが選択されたときとplotタイプが変更されたときは処理可能スペースを変更する
function set_gpu_processable_space_data(){

    // 選択されているplotのタイプを取得
    const selectBox_plot = document.getElementById('plot_type');
    const selectedOption = selectBox_plot.options[selectBox_plot.selectedIndex];
    const plot_type = selectedOption.value;

    // GPUのタイプを取得
    const selectBox_gpu = document.getElementById('gpu_type');
    const selectedOption_gpu = selectBox_gpu.options[selectBox_gpu.selectedIndex];
    const gpu_type = selectedOption_gpu.value;

    // 処理可能スペースをセット

    // GPU_PROCESSABLE_SPACE_PiBからtypeがplot_typeとGPUが一致するものを取得
    let gpu_processable_space_data = GPU_PROCESSABLE_SPACE_PiB.find(function (element) {
        return element.type == plot_type && element.gpu == gpu_type;
    });

    let processable_space_tib;

    // 見つかった場合はtibに変換して処理可能スペースをセット
    if (gpu_processable_space_data) {
        processable_space_tib = gpu_processable_space_data.size * 1024;
        // 推定値の警告を消す
        const space_attention = document.getElementById('space_attention');
        space_attention.style.display = 'none';
    }
    // 見つからなかった場合はplot_typeだけが一致するものを取得して推定値を算出する
    else {
        // GPU_PROCESSABLE_SPACE_PiBからplot_typeが一致するものを取得。
        //文字列の先頭からできるだけ一致するものを取得する(できるだけ世代の近いやつを選ぶ)
        let max_match_bentch = undefined;
        let max_match_count = 0;
        GPU_PROCESSABLE_SPACE_PiB.forEach(function (bench, index) {
            if (bench.type == plot_type) {
                const match_count = countMatchingChars(bench.gpu, gpu_type);
                if (match_count > max_match_count) {
                    max_match_count = match_count;
                    max_match_bentch = bench;
                }
            }
        });
        
        if (max_match_bentch === undefined) {
            console.log("no matching bench found:", gpu_type);
            return;
        }
        console.log("benchmark guess:" + gpu_type + " vs " + max_match_bentch.gpu);

        const base_gpu_power = GPU_POWER[max_match_bentch.gpu];
        const selected_gpu_power = GPU_POWER[gpu_type];
        processable_space_tib = Math.floor(max_match_bentch.size * 1024 * selected_gpu_power / base_gpu_power);

        // 警告を出す
        const space_attention = document.getElementById('space_attention');
        space_attention.style.display = 'inline';
    }

    const cal_item_box_gpu_processable_space_tib = document.getElementById('cal_item_box_gpu_processable_space_tib');
    cal_item_box_gpu_processable_space_tib.value = processable_space_tib;
}

function countMatchingChars(str1, str2) {
    let count = 0;
    // 最短の文字列の長さまでループを実行
    const minLength = Math.min(str1.length, str2.length);
    for (let i = 0; i < minLength; i++) {
        if (str1[i] === str2[i]) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

function set_gpu_gb_attention(){
    const plot_attention = {
        'NOSSD_C36': "12GB以上のGPUを選択してください",
        'NOSSD_C37': "16GB以上のGPUを選択してください",
        'NOSSD_C38': "24GB以上のGPUを選択してください",
        'GIGAHORSE_C32': "12GB以上のGPUを選択してください",
        'GIGAHORSE_C33': "24GB以上のGPUを選択してください",
        'DrPlotter_Eco3x': "24GB以上のGPUを選択してください",
        'DrPlotter_Pro4x': "24GB以上のGPUを選択してください",
    }

    // 選択されているplotのタイプを取得
    const selectBox_plot = document.getElementById('plot_type');
    const selectedOption = selectBox_plot.options[selectBox_plot.selectedIndex];
    const plot_type = selectedOption.value;

    const plot_attention_mesasge = plot_attention[plot_type] || '';
    const gb_attention = document.getElementById('gb_attention');
    gb_attention.textContent = plot_attention_mesasge;
}


function floor2(num){
    return Math.floor(num * 100) / 100;
}
function floor6(num){
    return Math.floor(num * 1000000) / 1000000;
}

function tib_to_tb(tib){
    return tib * 1.024 * 1.024 * 1.024 * 1.024;
}

function tb_to_tib(tb){
    return tb / 1.024 / 1.024 / 1.024 / 1.024;
}

window.addEventListener('load', function(){
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(function(input) {
        input.addEventListener('input', cal_all);
    });

    const select_list = document.querySelectorAll('select');
    select_list.forEach(function(select) {
        // GPUの種類が変更されたときは消費電力と処理可能スペースを変更する
        if(select.id == "gpu_type"){
            select.addEventListener('change', () =>{
                set_gpu_power_consumption_and_price_data();
                set_gpu_processable_space_data();
                cal_all();
            });
        }
        // plotの種類が変更されたときは処理可能スペースを変更する
        else if(select.id == "plot_type"){
            select.addEventListener('change', () =>{
                set_gpu_gb_attention();
                set_gpu_processable_space_data();
                cal_all();
            });
        }
        else{
            select.addEventListener('change', cal_all);
        }
    });
    set_gpu_power_consumption_and_price_data();
    set_gpu_processable_space_data();
    cal_all();
});
