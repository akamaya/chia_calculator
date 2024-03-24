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
    const plot_size= {
        'K32':101.4,
        'NOSSD_C1':84.5,
        'NOSSD_C2':82.9,
        'NOSSD_C3':81.3,
        'NOSSD_C4':79.7,
        'NOSSD_C5':78.1,
        'NOSSD_C10':70.8,
        'NOSSD_C11':64.9,
        'NOSSD_C12':60.8,
        'NOSSD_C13':57.3,
        'NOSSD_C14':53.8,
        'NOSSD_C15':50.3,
        'GIGAHORSE_C11':85.7,
        'GIGAHORSE_C12':82.5,
        'GIGAHORSE_C13':78.9,
        'GIGAHORSE_C14':74.7,
        'GIGAHORSE_C15':71.6,
        'GIGAHORSE_C16':64.8,
        'GIGAHORSE_C17':63.0,
        'GIGAHORSE_C18':59.7,
        'GIGAHORSE_C19':56.4,
        'GIGAHORSE_C20':53.1,
        'GIGAHORSE_C30':43.3,
        'GIGAHORSE_C31':38.6,
        'GIGAHORSE_C32':33.9,
        'GIGAHORSE_C33':29.1,
    }
    const selectBox = document.getElementById('plot_type');
    const selectedOption = selectBox.options[selectBox.selectedIndex];
    const selectValue = selectedOption.value;
    item_box_values.official_plot_size = plot_size['K32'];
    item_box_values.plot_size = plot_size[selectValue];


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
        
        let hdd_recovery_table = "-";
        if(hdd_profit_per_day_table > 0){
            const hdd_recovery_days_table = Math.ceil(hdd_price / hdd_profit_per_day_table);
            const hdd_recovery_years = Math.ceil(hdd_recovery_days_table / 365);
            const hdd_recovery_months = Math.floor((hdd_recovery_days_table % 365) / 30);
            hdd_recovery_table = hdd_recovery_years + '年' + hdd_recovery_months + 'ヶ月';
        }

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
        
        let hdd_recovery_table = "-";
        if(hdd_profit_per_day_table > 0){
            const hdd_recovery_days_table = Math.ceil((hdd_price + gpu_price_per_hdd) / hdd_profit_per_day_table);
            const hdd_recovery_years = Math.ceil(hdd_recovery_days_table / 365);
            const hdd_recovery_months = Math.floor((hdd_recovery_days_table % 365) / 30);
            hdd_recovery_table = hdd_recovery_years + '年' + hdd_recovery_months + 'ヶ月';
        }

        hdd_data.getElementsByClassName('hdd_recovery_table')[0].textContent = hdd_recovery_table;
        
        
    });
    
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
    const gpu_power_consumption = {
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
        'RTX4070TiSuper(16TB)': 285,
        'RTX4080(16GB)': 320,
        'RTX4080Super(16GB)': 320,
        'RTX4090(24GB)': 450,
    }
    const gpu_price = {
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
        'RTX4070TiSuper(16TB)': 130000,
        'RTX4080(16GB)': 173000,
        'RTX4080Super(16GB)': 169000,
        'RTX4090(24GB)': 280000,
    }
    const item_box_gpu_power_consumption = document.getElementById('cal_item_box_gpu_power_consumption');
    item_box_gpu_power_consumption.value = gpu_power_consumption[gpu_type];

    const cal_item_box_gpu_price = document.getElementById('cal_item_box_gpu_price');
    cal_item_box_gpu_price.value = gpu_price[gpu_type];
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

    // 処理可能スペース推定値に使うGPU処理能力(3D mark Time Spy)
    const gpu_power = {
        'RTX3060(8GB)': 9600,
        'RTX3060(12GB)': 9600,
        'RTX3060Ti(8GB)': 12000,
        'RTX3070(8GB)': 13500,
        'RTX3070Ti(8GB)': 15000,
        'RTX3080(10GB)': 22000,
        'RTX3080(12GB)': 22000,
        'RTX3080Ti(12GB)': 23000,
        'RTX3090(24GB)': 26000,
        'RTX3090Ti(24GB)': 28500,
        'RTX4060(8GB)': 17000,
        'RTX4060Ti(8GB)': 21000,
        'RTX4060Ti(16GB)': 21000,
        'RTX4070(12GB)': 27000,
        'RTX4070Super(12GB)': 35000,
        'RTX4070Ti(12GB)': 37000,
        'RTX4070TiSuper(16TB)': 41700,
        'RTX4080(16GB)': 47000,
        'RTX4080Super(16GB)': 48000,
        'RTX4090(24GB)': 62000,
        'RTXA5000(24GB)': 20000,
    }

    const gpu_processable_space_pib = [
        {"type": "NOSSD_C10","gpu":"RTX4090(24GB)",size: 63},// PiB
        {"type": "NOSSD_C11","gpu":"RTX4090(24GB)",size: 22},
        {"type": "NOSSD_C12","gpu":"RTX4090(24GB)",size: 12.5},
        {"type": "NOSSD_C13","gpu":"RTX4090(24GB)",size: 7},
        {"type": "NOSSD_C14","gpu":"RTX4090(24GB)",size: 3.75},
        {"type": "NOSSD_C15","gpu":"RTX4090(24GB)",size: 1.55},
        {"type": "GIGAHORSE_C11","gpu":"RTX3060Ti(8GB)",size: 166.435},// PiB
        {"type": "GIGAHORSE_C12","gpu":"RTX3060Ti(8GB)",size: 133.365},
        {"type": "GIGAHORSE_C13","gpu":"RTX3060Ti(8GB)",size: 75.45},
        {"type": "GIGAHORSE_C14","gpu":"RTX3060Ti(8GB)",size: 24.845},
        {"type": "GIGAHORSE_C15","gpu":"RTX3060Ti(8GB)",size: 10.50},
        {"type": "GIGAHORSE_C16","gpu":"RTX3060Ti(8GB)",size: 2.79},
        {"type": "GIGAHORSE_C17","gpu":"RTX3060Ti(8GB)",size: 2.01},
        {"type": "GIGAHORSE_C18","gpu":"RTX3060Ti(8GB)",size: 1.225},
        {"type": "GIGAHORSE_C19","gpu":"RTX3060Ti(8GB)",size: 0.48},
        {"type": "GIGAHORSE_C20","gpu":"RTX3060Ti(8GB)",size: 0.19},
        {"type": "GIGAHORSE_C30","gpu":"RTXA5000(24GB)",size: 0.61},
        {"type": "GIGAHORSE_C31","gpu":"RTXA5000(24GB)",size: 0.335},
        {"type": "GIGAHORSE_C32","gpu":"RTXA5000(24GB)",size: 0.155},
        {"type": "GIGAHORSE_C33","gpu":"RTXA5000(24GB)",size: 0.065},
    ]

    //   gpu_processable_space_pibからtypeがplot_typeと一致するものを取得
    const gpu_processable_space_data = gpu_processable_space_pib.find(function(element){
        return element.type == plot_type;
    }); 

    if(gpu_processable_space_data == undefined){
        return
    }

    const base_gpu_power = gpu_power[gpu_processable_space_data.gpu];

    const selected_gpu_power = gpu_power[gpu_type];
    const processable_space_tib = Math.floor(gpu_processable_space_data.size * 1024 * selected_gpu_power / base_gpu_power)
    const cal_item_box_gpu_processable_space_tib = document.getElementById('cal_item_box_gpu_processable_space_tib');
    cal_item_box_gpu_processable_space_tib.value = processable_space_tib;
}

function set_gpu_gb_attention(){
    const plot_attention = {
        'GIGAHORSE_C32':"12GB以上のGPUを選択してください",
        'GIGAHORSE_C33':"24GB以上のGPUを選択してください",
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
