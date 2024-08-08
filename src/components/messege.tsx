import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessegeProps {
    text: string
    amountOfReactions: number
    answered?: boolean
}

    export function Messege ({
        amountOfReactions,
        text,
        answered = false
    }:MessegeProps) {

    const [hasReacted, setHasReacted] = useState(false)

    function handleReactToMessege() {
        setHasReacted(true)
    }

    return (
        <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
        {text}
        {hasReacted ? (
            <button
            className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
            type="button"
          >
            {" "}
            <ArrowUp className="size-4" /> Curtir pergunta ({amountOfReactions}){" "}
          </button>
        ) : (
            <button
            onClick={handleReactToMessege}
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
            type="button"
          >
            {" "}
            <ArrowUp className="size-4" /> Curtir pergunta ({amountOfReactions}){" "}
          </button>
        )}
      </li>
    )
}