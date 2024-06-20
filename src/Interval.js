export function Cron({time}){
    
    const AddZero = (time) => ("0" + time).slice(-2);
    
    return(
        <div>
            <h1>Cron</h1>
            <div className='digits'>
              <span id='Minutos'>
                {AddZero(Math.floor((time / 60000) % 60))}
              </span>
              <span id='Seconds'>
                {AddZero(Math.floor((time / 1000) % 60))}
              </span>
              <span id='Ms'>
                {AddZero((time / 10 ) % 100)}
              </span>
            </div>
        </div>
    )
}