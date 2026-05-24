// رابط الزبائن
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxERi36hrxHTzzMFAJo-ALBVHH-gA9teyQzlnEhxrzj6lvc9AJkUd_laOVBOv75cbQk/exec";

// رابط الحضور
const ATTENDANCE_URL = "https://script.google.com/macros/s/AKfycbxcHXs5TiVJ7B98wdfEZqirRtaEoQpKcxLSOzMIFv0lV6YPV_Nc4tZ8KOQ3FIqkfhm3/exec";


document.addEventListener('DOMContentLoaded', () => {


    document.getElementById("back-btn").addEventListener("click", () => {
    window.location.href = "index.html";
});
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    const titleElement = document.getElementById('category-title');
    const contentElement = document.getElementById('category-content');

    switch(type){

    // ===================== الرواتب =====================
    case 'rawatib':

    titleElement.textContent = "أشرطة الرواتب";

    contentElement.innerHTML = `

        <div class="salary-grid">

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=0#gid=0" target="_blank">
                <div class="salary-icon">📄</div>
                <span>يناير</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=1837735350#gid=1837735350" target="_blank">
                <div class="salary-icon">📄</div>
                <span>فبراير</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=1705307786#gid=1705307786" target="_blank">
                <div class="salary-icon">📄</div>
                <span>مارس</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=733269719#gid=733269719" target="_blank">
                <div class="salary-icon">📄</div>
                <span>أبريل</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=2038105078#gid=2038105078" target="_blank">
                <div class="salary-icon">📄</div>
                <span>مايو</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=1854558213#gid=1854558213" target="_blank">
                <div class="salary-icon">📄</div>
                <span>يونيو</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=866632125#gid=866632125" target="_blank">
                <div class="salary-icon">📄</div>
                <span>يوليو</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=1669386882#gid=1669386882" target="_blank">
                <div class="salary-icon">📄</div>
                <span>أغسطس</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=793180578#gid=793180578" target="_blank">
                <div class="salary-icon">📄</div>
                <span>سبتمبر</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=862761996#gid=862761996" target="_blank">
                <div class="salary-icon">📄</div>
                <span>أكتوبر</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=897672602#gid=897672602" target="_blank">
                <div class="salary-icon">📄</div>
                <span>نوفمبر</span>
            </a>

            <a class="salary-card" href="https://docs.google.com/spreadsheets/d/1iauGoTGU-Aow81BzFozfpIlNJCCUIwUWJF4xx2_2RtM/edit?gid=1012104889#gid=1012104889" target="_blank">
                <div class="salary-icon">📄</div>
                <span>ديسمبر</span>
            </a>

        </div>

    `;

break;


// ===================== طباعة الوصول =====================
case 'print':

    titleElement.textContent = "طباعة الوصول";

    contentElement.innerHTML = `
        <input type="text" id="searchInput" placeholder="🔎 ابحث...">
        <div id="receiptsList"></div>
    `;

    const listDiv = document.getElementById("receiptsList");
    const searchInput = document.getElementById("searchInput");

    async function renderList(filter = "") {

        listDiv.innerHTML = "جاري التحميل...";

        try {

            const response = await fetch(`${SCRIPT_URL}?search=${filter}`);
            const data = await response.json();

            listDiv.innerHTML = "";

            if(!data.length){
                listDiv.innerHTML = "<p>لا توجد نتائج</p>";
                return;
            }

            data.forEach(row => {

                const card = document.createElement("div");
                card.className = "receipt-card";

                card.innerHTML = `
                    <p><b>الاسم:</b> ${row.name}</p>
                    <p><b>الهاتف:</b> ${row.phone}</p>
                    <p><b>الخدمة:</b> ${row.service}</p>
                    <p><b>المبلغ:</b> ${row.price}</p>
                    <p><b>التاريخ:</b> ${row.date}</p>

                    <button onclick="window.open('${row.fileUrl}')">
                        فتح الملف
                    </button>

                    <button onclick="deleteCustomer('${row.fileId}')">
                        🗑️ حذف
                    </button>

                    <hr>
                `;

                listDiv.appendChild(card);
            });

        } catch(err){
            console.log(err);
            listDiv.innerHTML = "❌ خطأ بالاتصال";
        }
    }

    renderList();

    searchInput.addEventListener("input", () => {
        renderList(searchInput.value);
    });

break;


// ===================== إضافة زبون =====================
case 'new':

    titleElement.textContent = "إضافة زبون جديد";

    contentElement.innerHTML = `
        <div class="customer-form-card">

            <form id="customer-form">

                <div class="form-group">
                    <label>الاسم</label>
                    <input type="text" id="name" required>
                </div>

                <div class="form-group">
                    <label>الهاتف</label>
                    <input type="text" id="phone" required>
                </div>

                <div class="form-group">
                    <label>الخدمة</label>
                    <input type="text" id="service" required>
                </div>

                <div class="form-group">
                    <label>السعر</label>
                    <input type="text" id="price" required>
                </div>

                <button type="submit">💾 حفظ</button>

            </form>

        </div>
    `;

    const form = document.getElementById("customer-form");

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const customer = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            service: document.getElementById("service").value,
            price: document.getElementById("price").value,
            date: new Date().toLocaleDateString('ar-IQ')
        };

        try {

            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(customer)
            });

            const data = await res.json();

            if(data.status === "success"){
                alert("تم إنشاء ملف خاص للزبون ✅");
                window.open(data.url, "_blank");
                window.location.href = "category.html?type=print";
            }

        } catch (err) {
            console.log("خطأ إنشاء الملف:", err);
            alert("حدث خطأ أثناء حفظ الزبون");
        }

    });

break;


// ===================== حضور =====================
case 'attendance':

    titleElement.textContent = "حضور الموظفين";

    contentElement.innerHTML = `
        <div class="attendance-container">

            <div class="customer-form-card">

                <div class="form-group">
                    <label>اسم الموظف</label>
                    <input type="text" id="employeeName" placeholder="ادخل الاسم">
                </div>

                <button id="checkInBtn">✅ تسجيل حضور</button>

                <br><br>

                <button id="checkOutBtn">🚪 تسجيل انصراف</button>

            </div>

            <br><br>

            <div class="customer-form-card">

                <h2>طلب إجازة</h2>

                <div class="form-group">
                    <label>اسم الموظف</label>
                    <input type="text" id="leaveName">
                </div>

                <div class="form-group">
                    <label>نوع الإجازة</label>
                    <input type="text" id="leaveType">
                </div>

                <div class="form-group">
                    <label>عدد الأيام</label>
                    <input type="number" id="leaveDays">
                </div>

                <div class="form-group">
                    <label>السبب</label>
                    <input type="text" id="leaveReason">
                </div>

                <button id="leaveBtn">📄 إرسال طلب الإجازة</button>

            </div>

        </div>
    `;

    document.getElementById("checkInBtn").addEventListener("click", async () => {

        const name = document.getElementById("employeeName").value;

        if(!name){
            alert("ادخل اسم الموظف");
            return;
        }

        const data = {
            action: "attendance",
            name: name,
            type: "دخول",
            time: new Date().toLocaleTimeString('ar-IQ'),
            date: new Date().toLocaleDateString('ar-IQ')
        };

        try {
            await fetch(ATTENDANCE_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert("تم تسجيل الحضور ✅");

        } catch(err){
            console.log(err);
            alert("حدث خطأ");
        }

    });


    document.getElementById("checkOutBtn").addEventListener("click", async () => {

        const name = document.getElementById("employeeName").value;

        if(!name){
            alert("ادخل اسم الموظف");
            return;
        }

        const data = {
            action: "attendance",
            name: name,
            type: "انصراف",
            time: new Date().toLocaleTimeString('ar-IQ'),
            date: new Date().toLocaleDateString('ar-IQ')
        };

        try {
            await fetch(ATTENDANCE_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert("تم تسجيل الانصراف 🚪");

        } catch(err){
            console.log(err);
            alert("حدث خطأ");
        }

    });


    document.getElementById("leaveBtn").addEventListener("click", async () => {

        const data = {
            action: "leave",
            name: document.getElementById("leaveName").value,
            leaveType: document.getElementById("leaveType").value,
            days: document.getElementById("leaveDays").value,
            reason: document.getElementById("leaveReason").value,
            date: new Date().toLocaleDateString('ar-IQ')
        };

        try {
            await fetch(ATTENDANCE_URL, {
                method:"POST",
                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert("تم إرسال طلب الإجازة 📄");

        } catch(err){
            console.log(err);
            alert("حدث خطأ");
        }

    });

break;


// ===================== الديون =====================
case 'duyun':

    titleElement.textContent = "الديون";

    contentElement.innerHTML = `

        <div class="debts-container">

            <div class="debt-box">

                <h2>💰 الدائن</h2>

                <div class="debt-buttons">

                    <button class="debt-btn" id="addCreditor">
                        ➕ إضافة دائن
                    </button>

                    <button class="debt-btn" id="viewCreditors">
                        📋 عرض الدائنين
                    </button>

                </div>

            </div>

            <div class="debt-box">

                <h2>📄 المديون</h2>

                <div class="debt-buttons">

                    <button class="debt-btn" id="addDebtor">
                        ➕ إضافة مديون
                    </button>

                    <button class="debt-btn" id="viewDebtors">
                        📋 عرض المديونين
                    </button>

                </div>

            </div>

        </div>
    `;

    document.getElementById("addCreditor").onclick = () => {
        window.open("https://docs.google.com/spreadsheets/d/1Y1HTbikJ59YSHTo-5j9kcWrBhTR137m3WqymWNEkThU/edit?gid=0#gid=0","_blank");
    };

    document.getElementById("viewCreditors").onclick = () => {
        window.open("https://docs.google.com/spreadsheets/d/1Y1HTbikJ59YSHTo-5j9kcWrBhTR137m3WqymWNEkThU/edit?gid=0#gid=0","_blank");
    };

    document.getElementById("addDebtor").onclick = () => {
        window.open("https://docs.google.com/spreadsheets/d/1Y1HTbikJ59YSHTo-5j9kcWrBhTR137m3WqymWNEkThU/edit?gid=1897270240#gid=1897270240","_blank");
    };

    document.getElementById("viewDebtors").onclick = () => {
        window.open("https://docs.google.com/spreadsheets/d/1Y1HTbikJ59YSHTo-5j9kcWrBhTR137m3WqymWNEkThU/edit?gid=1897270240#gid=1897270240","_blank");
    };

break;

    } // END switch

}); // END DOMContentLoaded


// ===================== حذف الزبون =====================
window.deleteCustomer = async function(fileId) {

    const ok = confirm("هل تريد حذف الزبون؟");
    if(!ok) return;

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                action: "delete",
                fileId: fileId
            })
        });

        const text = await response.text();
        const data = JSON.parse(text);

        if(data.status === "success"){
            alert("تم الحذف ✅");
            location.reload();
        } else {
            alert("فشل الحذف");
        }

    } catch(err){
        console.log(err);
        alert("خطأ بالاتصال");
    }
};