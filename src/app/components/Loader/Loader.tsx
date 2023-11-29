import React from "react";

export default function Loader(props: any){

    const LdsSpinner = () => {
        if(props.Loading){
            return (
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        } else if (props.NoData && !props.Loading){
            return (
                <div className="no-result size-text-msg">{props.Text ? props.Text : 'No Data'}</div>
            )
        }
    }

    const LdsRing = () => {
        if(props.Loading){
            return (
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
        } else if (props.NoData && !props.Loading){
            return (
                <div className="no-result size-text-msg">{props.Text ? props.Text : 'No Data'}</div>
            )
        }
    }

    const renderLoader = () => {
        switch (props.Type) {
            case 'lds':
                return LdsSpinner();
                break;
            case 'lds-ring':
                return LdsRing(); 
                break;
            default:
                return LdsRing();
                break;
        }
    }
    
    return <>{renderLoader()}</>
}