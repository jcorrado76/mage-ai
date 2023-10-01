from mage_ai.api.presenters.BasePresenter import BasePresenter


class PipelineInteractionPresenter(BasePresenter):
    default_attributes = [
        'interactions',
    ]

    async def present(self, **kwargs):
        if isinstance(self.model, dict):
            return self.model

        return await self.model.to_dict()
