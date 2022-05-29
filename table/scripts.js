var equipmentDetails = [

  {
    "machine_name": "Auto Winding Machine",
    "machine_id": "machine001",
    "daily_energy": "0",
    "monthly_energy": "0",
    "yearly_energy": "0",
    "active_power": "0",
    "apparent_power": "0",
    "reactive_power": "0",
    "current": "0.0",
    "voltage": "0.0",
    "power": "0.0",
    "idle_daily": "0",
    "idle_monthly": "0",
    "idle_yearly": "0"
  },
  {
    "machine_name": "Boiler Machine",
    "machine_id": "machine004",
    "daily_energy": "0",
    "monthly_energy": "0",
    "yearly_energy": "0",
    "active_power": "0",
    "apparent_power": "0",
    "reactive_power": "0",
    "current": "0",
    "voltage": "0",
    "power": "0",
    "idle_daily": "0",
    "idle_monthly": "0",
    "idle_yearly": "0"
  }


]


buildTable(equipmentDetails);

function buildTable(data) {
  var table = document.getElementById('myTable');
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
            <td colspan="3">${data[i].machine_name}</td>
            <td colspan="3">${data[i].machine_id}</td>
            <td>${data[i].daily_energy}</td>
            <td>${data[i].monthly_energy}</td>
            <td>${data[i].yearly_energy}</td>
            <td colspan="3">${data[i].active_power}</td>
            <td colspan="3">${data[i].apparent_power}</td>
            <td colspan="3">${data[i].reactive_power}</td>
            <td colspan="3">${data[i].current}</td>
            <td colspan="3">${data[i].voltage}</td>
            <td colspan="3">${data[i].power}</td>
            <td>${data[i].idle_daily}</td>
            <td>${data[i].idle_monthly}</td>
            <td>${data[i].idle_yearly}</td>
      </tr>`
      table.innerHTML += row;
  }
}
