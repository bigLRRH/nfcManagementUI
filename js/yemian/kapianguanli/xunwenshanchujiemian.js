function ok()
{
    window.parent.postMessage('ok','*');
}

function cancel()
{
    window.parent.postMessage('cancel','*');
}