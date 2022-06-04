const id = (el) => document.getElementById(el)

const $month = id('month')
const setData = async (day) =>{
    try{
        const wichDay = day.style.getPropertyValue('--day').replaceAll("'","")
        const fetchingData = await fetch('assets/data.json'),
        json = await fetchingData.json()
        const useableData = json.find(day=> day.day===wichDay)
        day.style.setProperty('--amount',`'$${useableData.amount}'`)
        const totalExpense = json.map(x=>x.amount).reduce((pr,cr)=>cr + pr)
        day.style.setProperty('--percent',`${useableData.amount*400/totalExpense}%`)
    }
    catch (err){
        console.log(err)
    }
}
Array.from($month.children).forEach(day=>setData(day))