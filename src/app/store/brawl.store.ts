import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ClubInfoDto } from "../models/player";
import { HttpClient } from "@angular/common/http";
import { computed, inject } from "@angular/core";

type  BrawlState={
    isloading: boolean;
    clubInfo:ClubInfoDto | null;
    error: string | null;
}

const initialState: BrawlState = {
    isloading: false,
    clubInfo: null,
    error: null,
}

export const BrawlStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, http = inject(HttpClient))=>({
        loadClubInfo(){
            patchState(store, { isloading: true });
            return http.get<any>('https://brawl-gang-backend.onrender.com/club/22JCPVLPU').subscribe(
                {next:(res)=>{patchState(store, { clubInfo: res })},
                error:(err)=>{patchState(store, { clubInfo: err })},
                complete:()=>{patchState(store, { isloading:false})},
                }
            );
        }
    })),
    withComputed((state)=>({
        president:computed(()=> state.clubInfo()?.members.find(x=>x.role === "president"))
    }))
);