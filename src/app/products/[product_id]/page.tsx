import {Actor, AnonymousIdentity, HttpAgent} from "@dfinity/agent";
import { idlFactory } from "../../candid/ledger.idl";
import {Principal} from "@dfinity/principal";

export const dynamicParams = true;

export async function generateStaticParams() {
    const agent = await HttpAgent.create({
        identity: new AnonymousIdentity(),
        host: "https://icp-api.io",
        verifyQuerySignatures: true,
    });

    const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai"
    });

    const {icrc1_balance_of} = actor;

    // ⚠️ ERRORS
    // - Invalid signature from replica
    // -  Certificate is signed more than 5 minutes in the past ...
    console.log(await icrc1_balance_of({
        owner: Principal.fromText("2vxsx-fae"),
        subaccount: []
    }))

    return [{product_id: "2vxsx-fae"}]
}

export default function ProductPage({
                                        params,
                                    }: {
    params: { product_id: string };
}) {
    return <div>{params.product_id}</div>
}