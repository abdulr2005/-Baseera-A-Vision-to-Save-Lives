/**
 * مبادرة بصيرة (Baseera) - محرك التوعية المجتمعية
 * المطور: عبدالرحمن العيسوي
 */

let currentLang = localStorage.getItem('selectedLang') || 'ar';

const translations = {
    ar: {
        nav_home: "الرئيسية",
        report_main_title: "بصيرة: رؤية مجتمعية لإنقاذ الأرواح",
        timing_badge: "نبض الأزمة",
        timing_title: "الواقع الحالي",
        timing_desc: "تضاعف عدد الوفيات 4 مرات في السنوات الأخيرة؛ الصمت لم يعد خياراً والوعي هو أول خطوة للتغيير.",
        content_badge: "خطر الفنتانيل",
        content_title: "التهديد الخفي",
        content_desc: "أكثر من 5,600 عائلة فقدت غاليها بسبب هذه المادة وحدها؛ المعرفة هي درع الحماية الأول.",
        sentiment_badge: "رسالة للشباب",
        sentiment_title: "حماية مجتمعنا",
        sentiment_desc: "الرجال هم الأكثر عرضة لهذا الخطر؛ وعينا اليوم وفهمنا للمخاطر هو الأمان لهم غداً.",
        timing_section_title: "رحلة الأرقام المؤلمة (2012-2021)",
        timing_section_desc: "هذا الرسم يوضح زيادة الحالات سنوياً، وهدفنا هو تحويل هذا المنحنى للأسفل عبر التكاتف ونشر الوعي الصحي.",
        content_section_title: "ماذا نواجه اليوم؟",
        content_section_desc: "تُظهر البيانات أن الفنتانيل هو السبب الرئيسي، وفهمنا لانتشاره يساعدنا في حماية أصحابنا وأهالينا.",
        facts_badge: "معلومات طبية هامة",
        facts_title: "ما الذي يجعل الفنتانيل مختلفاً؟",
        p_power_h: "القوة الفائقة",
        p_power_d: "أقوى من المورفين بـ 50 إلى 100 مرة. فعال طبياً لكنه مميت إذا استخدم بدون إشراف طبي دقيق.",
        p_use_h: "طرق الاستخدام",
        p_use_d: "يُستخدم طبياً كحقن، لاصقات جلدية، أو بخاخات تحت إشراف الأطباء فقط ولا يجوز تداوله خارجها.",
        p_side_h: "الآثار الجانبية",
        p_side_d: "يشمل النعاس الشديد وتباطؤ التنفس، وفي الجرعات العالية يؤدي للوفاة بسبب توقف الجهاز التنفسي.",
        p_illegal_h: "خطر الشارع",
        p_illegal_d: "النسخ غير القانونية التي تُباع في الشوارع وتُخلط سراً هي السبب الرئيسي لارتفاع الوفيات عالمياً.",
        rescue_title: "كيف تنقذ حياة؟ (دليل الطوارئ)",
        step_1_title: "1. اتصل فوراً",
        step_1_desc: "عند رؤية شخص فاقد للوعي أو يجد صعوبة في التنفس، اتصل بالإسعاف فوراً ولا تتردد.",
        step_2_title: "2. استخدم المنقذ",
        step_2_desc: "اطلب بخاخ 'نالوكسون' (Narcan) من الصيدلية؛ هو حل سريع وآمن يعيد التنفس في لحظات الطوارئ.",
        step_3_title: "3. ابقَ معه",
        step_3_desc: "ضع الشخص على جانبه وابقَ معه حتى وصول المساعدة لضمان سلامة تنفسه.",
        footer_name: "عبدالرحمن العيسوي"
    },
    en: {
        nav_home: "Home",
        report_main_title: "Baseera: A Vision to Save Lives",
        timing_badge: "Crisis Pulse",
        timing_title: "Current Reality",
        timing_desc: "Deaths have quadrupled recently; staying informed is the first step toward a safer community.",
        content_badge: "Fentanyl Threat",
        content_title: "The Hidden Threat",
        content_desc: "Over 5,600 families have lost loved ones to this drug; knowledge is our best defense.",
        sentiment_badge: "Youth Outreach",
        sentiment_title: "Community Protection",
        sentiment_desc: "Men are most at risk; understanding these facts today creates a safer tomorrow for everyone.",
        timing_section_title: "Historical Trends (2012-2021)",
        timing_section_desc: "This chart shows rising cases; our goal is to flatten this curve through education and support.",
        content_section_title: "What are we facing?",
        content_section_desc: "Data confirms Fentanyl is the primary cause. Understanding its spread helps us protect our friends.",
        facts_badge: "Medical Facts",
        facts_title: "What Makes Fentanyl Different?",
        p_power_h: "Extreme Potency",
        p_power_d: "50-100x stronger than morphine. Medically effective but lethal without expert supervision.",
        p_use_h: "Medical Use",
        p_use_d: "Administered via injections, patches, or sprays; never to be used outside hospital care.",
        p_side_h: "Side Effects",
        p_side_d: "Causes severe drowsiness and respiratory depression, leading to fatal breathing failure in high doses.",
        p_illegal_h: "Street Risk",
        p_illegal_d: "Illegal versions mixed secretly are the primary cause of the global overdose surge.",
        rescue_title: "How to Save a Life? (Emergency Guide)",
        step_1_title: "1. Act Fast",
        step_1_desc: "Call emergency services immediately if someone is unconscious or struggling to breathe.",
        step_2_title: "2. Use Reversal",
        step_2_desc: "Get 'Narcan' (Naloxone) from a pharmacy; it’s a safe spray that restores breathing instantly.",
        step_3_title: "3. Stay Present",
        step_3_desc: "Place the person on their side and stay with them until professional help arrives.",
        footer_name: "Abdulrahman El-Essawi"
    }
};

const reportData = {
    timing: {
        labels: ['2012', '2014', '2016', '2018', '2020', '2021'],
        values: [355, 558, 917, 1035, 1374, 1524] 
    },
    content: {
        labels: ['فنتانيل', 'هيروين', 'كوكايين', 'أخرى'],
        values: [5670, 3100, 2800, 1800] 
    },
    accuracy: {
        labels: ['نجاة (مع تدخل سريع)', 'خطر (بدون تدخل)'],
        values: [90, 10] 
    }
};

const charts = {};

function initCharts() {
    const commonOptions = { responsive: true, maintainAspectRatio: false };

    // الخط الزمني
    const timingCtx = document.getElementById('timingChart').getContext('2d');
    const timingGradient = timingCtx.createLinearGradient(0, 0, 0, 400);
    timingGradient.addColorStop(0, 'rgba(220, 38, 38, 0.4)');
    timingGradient.addColorStop(1, 'rgba(220, 38, 38, 0)');

    charts.timing = new Chart(timingCtx, {
        type: 'line',
        data: { 
            labels: reportData.timing.labels, 
            datasets: [{ label: 'الوفيات', data: [], borderColor: '#dc2626', backgroundColor: timingGradient, fill: true, tension: 0.4 }] 
        },
        options: commonOptions
    });

    // توزيع المواد
    charts.content = new Chart(document.getElementById('contentChart'), {
        type: 'bar',
        data: { 
            labels: reportData.content.labels, 
            datasets: [{ label: 'عدد الحالات', data: [], backgroundColor: '#1e3a8a', borderRadius: 8 }] 
        },
        options: commonOptions
    });

    // أثر التدخل
    charts.accuracy = new Chart(document.getElementById('accuracyChart'), {
        type: 'doughnut',
        data: { 
            labels: reportData.accuracy.labels, 
            datasets: [{ data: [], backgroundColor: ['#16a34a', '#cbd5e1'] }] 
        },
        options: { ...commonOptions, cutout: '75%' }
    });
}

function updateLanguageUI() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
    });
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-switch').innerText = currentLang === 'ar' ? 'English' : 'العربية';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const chart = charts[id];
            if (chart && chart.data.datasets[0].data.length === 0) {
                chart.data.datasets[0].data = reportData[id].values;
                chart.update();
            }
        }
    });
}, { threshold: 0.4 });

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    updateLanguageUI();
    document.querySelectorAll('.stack-section').forEach(section => observer.observe(section));
    document.getElementById('lang-switch').addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('selectedLang', currentLang);
        updateLanguageUI();
    });
});