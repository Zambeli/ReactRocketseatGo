import { useParams } from "react-router-dom";

import amaLogo from "../assets/ama-logo.svg";
import { ArrowRight, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Messege } from "../components/messege";

export function Room() {
  const { roomId } = useParams();

  function handleShareRoom () {

    const url = window.location.href.toString()

    if(navigator.share !== undefined && navigator.canShare()) {
        navigator.share({ url })
    } else {
        navigator.clipboard.writeText(url)

        toast.info('The room URL was copied to your clipboard!')
    }

  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="Ama" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          className="ml-auto hover:bg-zinc-700 transition-colors bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm"
          type="submit"
          onClick={handleShareRoom}
        >
          Compartilhar <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form className="ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1 flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800">
        <input
          autoComplete="off"
          className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta"
        />
        <button
          className="hover:bg-orange-500 transition-colors bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm"
          type="submit"
        >
          Criar pergunta <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">

        <Messege answered text="O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?" amountOfReactions={100}/>

        <Messege text="Como funcionam as goroutines em GoLang e por que elas são importantes para a concorrência e paralelismo?" amountOfReactions={50}/>

        <Messege text="Quais são as melhores práticas para organizar o código em um projeto GoLang, incluindo pacotes, módulos e a estrutura de diretórios?" amountOfReactions={10}/>

      </ol>
    </div>
  );
}
