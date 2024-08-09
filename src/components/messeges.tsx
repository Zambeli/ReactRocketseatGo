import { useParams } from "react-router-dom";
import { Messege } from "./messege";
import { getRoomMesseges } from "../http/get-room-messeges";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMessageWebsockets } from "../hooks/use-messages-websocket";

export function Messeges () {

    const { roomId } = useParams()

    if(!roomId) {
        throw new Error('Messeges components must be used within room page')
    }

    const { data } = useSuspenseQuery({
        queryKey: ['messages', roomId],
        queryFn: () => getRoomMesseges({ roomId }),
    })

    useMessageWebsockets({roomId})

    const sortedMessages = data.messages.sort((a,b) => {
        return b.amountOfReactions - a.amountOfReactions
    })

    return(
        <ol className="list-decimal list-outside px-3 space-y-8">
        {sortedMessages.map(message => {
            return (
                <Messege
                id={message.id}
                key={message.id}
                text={message.text}
                amountOfReactions={message.amountOfReactions}
                answered={message.answered}/>
            )
        })}
      </ol>
    )
}